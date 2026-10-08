#!/usr/bin/env python3
"""
Update games-data.js from ESPN's NFL scoreboard endpoint and maintain action-status.js.

Behavior:
- Never marks a game final unless ESPN explicitly reports completed=true and post/final state.
- Learns exact kickoff timestamps from ESPN and stores them in games-data.js.
- Refreshes API-reported game states on each manual run with unresolved games.
- Logs API checks, final results, and errors to action-status.js.
- Keeps only the newest MAX_HISTORY activity entries.
"""

from __future__ import annotations

import json
import os
import re
import sys
import urllib.parse
import urllib.request
from datetime import datetime, timedelta, timezone
from pathlib import Path

GAMES_PATH = Path("games-data.js")
PICKS_PATH = Path("picks-data.js")
STATUS_PATH = Path("action-status.js")

CHECK_INTERVAL_MINUTES = int(os.environ.get("CHECK_INTERVAL_MINUTES", "15"))
MAX_HISTORY = int(os.environ.get("MAX_HISTORY", "100"))

ESPN_URL = "https://site.api.espn.com/apis/site/v2/sports/football/nfl/scoreboard"

TEAM_ALIASES = {
    "WSH": "WAS",
    "JAC": "JAX",
}


def utc_now() -> datetime:
    return datetime.now(timezone.utc)


def iso(dt: datetime | None) -> str | None:
    return dt.astimezone(timezone.utc).isoformat().replace("+00:00", "Z") if dt else None


def normalize_team(team: str) -> str:
    team = str(team).strip().upper()
    return TEAM_ALIASES.get(team, team)


def load_js_object(path: Path, const_name: str) -> tuple[str, dict, str]:
    text = path.read_text(encoding="utf-8")
    pattern = re.compile(
        rf"(const\s+{re.escape(const_name)}\s*=\s*)(\{{.*\}})(\s*;\s*)$",
        re.DOTALL,
    )
    match = pattern.search(text)
    if not match:
        raise RuntimeError(f"Could not parse {const_name} from {path}")
    obj = json.loads(match.group(2))
    return text[: match.start(2)], obj, text[match.end(2) :]


def write_js_object(path: Path, prefix: str, obj: dict, suffix: str) -> None:
    path.write_text(prefix + json.dumps(obj, indent=2, ensure_ascii=False) + suffix, encoding="utf-8")


def default_status() -> dict:
    return {
        "version": 1,
        "status": "not-run",
        "season": None,
        "week": None,
        "lastUpdate": None,
        "lastApiCheck": None,
        "lastApiSuccess": None,
        "nextEligibleCheck": None,
        "nextCheckReason": "The updater has not run yet.",
        "lastError": None,
        "history": [],
    }


def load_status() -> tuple[str, dict, str]:
    if not STATUS_PATH.exists():
        return "const ACTION_STATUS = ", default_status(), ";\n"
    return load_js_object(STATUS_PATH, "ACTION_STATUS")


def add_history(status: dict, event_type: str, message: str, when: datetime | None = None) -> None:
    history = status.setdefault("history", [])
    history.insert(0, {
        "time": iso(when or utc_now()),
        "type": event_type,
        "message": message,
    })
    del history[MAX_HISTORY:]


def save_status(prefix: str, status: dict, suffix: str) -> None:
    status["lastUpdate"] = iso(utc_now())
    write_js_object(STATUS_PATH, prefix, status, suffix)


def season_for_today(now: datetime) -> int:
    return now.year - 1 if now.month <= 2 else now.year


def parse_iso(text: str) -> datetime:
    text = text.strip()
    if text.endswith("Z"):
        text = text[:-1] + "+00:00"
    dt = datetime.fromisoformat(text)
    if dt.tzinfo is None:
        dt = dt.replace(tzinfo=timezone.utc)
    return dt.astimezone(timezone.utc)


def espn_week_data(season: int, week: int, season_type: int) -> dict:
    fixture = os.environ.get("NFL_RESULTS_FIXTURE")
    if fixture:
        return json.loads(Path(fixture).read_text(encoding="utf-8"))

    params = urllib.parse.urlencode({
        "season": season,
        "seasontype": season_type,
        "week": week,
    })
    req = urllib.request.Request(
        f"{ESPN_URL}?{params}",
        headers={
            "User-Agent": "football-pool-result-updater/2.0",
            "Accept": "application/json",
        },
    )
    with urllib.request.urlopen(req, timeout=20) as response:
        return json.load(response)


def event_info(event: dict) -> dict | None:
    competitions = event.get("competitions") or []
    if not competitions:
        return None

    comp = competitions[0]
    competitors = comp.get("competitors") or []
    if len(competitors) != 2:
        return None

    teams = {}
    for c in competitors:
        team = normalize_team((c.get("team") or {}).get("abbreviation", ""))
        if not team:
            return None
        teams[team] = c

    status_type = ((comp.get("status") or {}).get("type") or {})
    completed = status_type.get("completed") is True
    state = str(status_type.get("state") or "").lower()
    status_name = str(status_type.get("name") or "").upper()
    explicit_final = completed and (state == "post" or "FINAL" in status_name)

    return {
        "kickoff": event.get("date"),
        "teams": teams,
        "explicit_final": explicit_final,
        "status_name": status_name,
        "state": state,
    }


def build_event_map(payload: dict) -> dict[frozenset[str], dict]:
    result = {}
    for event in payload.get("events") or []:
        info = event_info(event)
        if info:
            key = frozenset(info["teams"].keys())
            if len(key) == 2:
                result[key] = info
    return result


def game_key(game: dict) -> frozenset[str]:
    return frozenset({
        normalize_team(game.get("away", "")),
        normalize_team(game.get("home", "")),
    })


def determine_winner(info: dict) -> str:
    winners = [
        team for team, competitor in info["teams"].items()
        if competitor.get("winner") is True
    ]
    if len(winners) == 1:
        return winners[0]

    scores = []
    for team, competitor in info["teams"].items():
        raw = competitor.get("score")
        try:
            scores.append((team, int(raw)))
        except (TypeError, ValueError):
            raise RuntimeError(f"Final game has invalid score for {team}: {raw!r}")

    if len(scores) == 2 and scores[0][1] == scores[1][1]:
        return "TIE"

    raise RuntimeError("Final game was reported without a safely identifiable winner or tie.")


def api_game_status(info: dict) -> str:
    if info["explicit_final"]:
        return "final"
    name = info["status_name"]
    for marker, label in (("POSTPON", "postponed"), ("CANCEL", "cancelled"),
                          ("SUSPEND", "suspended"), ("DELAY", "delayed")):
        if marker in name:
            return label
    if info["state"] == "in":
        return "underway"
    if info["state"] == "pre":
        return "pre-game"
    return "unknown"


def compute_next_check(games: list[dict], now: datetime) -> tuple[datetime | None, str]:
    unresolved = [g for g in games if not g.get("final", False)]
    if not unresolved:
        return None, "All games are final."
    # This is a suggested time only; the workflow remains manual-only.
    if any(g.get("apiStatus") != "pre-game" or not g.get("kickoff") for g in unresolved):
        return now + timedelta(minutes=CHECK_INTERVAL_MINUTES), "Suggested manual refresh for unresolved game states."
    kickoffs = [parse_iso(g["kickoff"]) for g in unresolved]
    if min(kickoffs) <= now:
        return now + timedelta(minutes=CHECK_INTERVAL_MINUTES), "Suggested manual refresh; awaiting API-confirmed start."
    return min(kickoffs), "Suggested manual refresh at the next kickoff; no scheduled run is enabled."


def main() -> int:
    now = utc_now()
    status_prefix, status, status_suffix = load_status()

    try:
        if not GAMES_PATH.exists() or not PICKS_PATH.exists():
            raise RuntimeError("games-data.js and picks-data.js must exist in the repository root.")

        game_prefix, games_data, game_suffix = load_js_object(GAMES_PATH, "GAMES_DATA")
        _, picks_data, _ = load_js_object(PICKS_PATH, "PICKS_DATA")

        week = int(picks_data["week"])
        season = int(picks_data.get("season", season_for_today(now)))
        season_type = int(picks_data.get("seasonType", 2))

        status["season"] = season
        status["week"] = week
        status["lastError"] = None

        games = games_data.get("games") or []
        unresolved = [g for g in games if not g.get("final", False)]

        if not unresolved:
            status["status"] = "complete"
            status["nextEligibleCheck"] = None
            status["nextCheckReason"] = "All games are final."
            save_status(status_prefix, status, status_suffix)
            print("All games are already final.")
            return 0

        check_time = utc_now()
        status["lastApiCheck"] = iso(check_time)
        payload = espn_week_data(season, week, season_type)
        status["lastApiSuccess"] = iso(utc_now())
        event_map = build_event_map(payload)
        missing = [g.get("id", "?") for g in unresolved if game_key(g) not in event_map]
        if missing:
            raise RuntimeError("Could not match unresolved pool games to ESPN: " + ", ".join(missing))

        games_changed = False
        final_count = 0
        for game in unresolved:
            info = event_map[game_key(game)]
            kickoff = info.get("kickoff")
            if kickoff:
                parse_iso(kickoff)  # Reject invalid API dates before writing data.
                game["kickoff"] = kickoff
            api_status = api_game_status(info)
            previous_status = game.get("apiStatus")
            game["apiStatus"] = api_status
            game["apiStatusCheckedAt"] = iso(check_time)
            games_changed = True
            if info["explicit_final"]:
                winner = determine_winner(info)
                game["final"] = True
                game["winner"] = winner
                final_count += 1
                result_text = "TIE" if winner == "TIE" else f"{winner} won"
                add_history(status, "final", f"{game.get('id')}: FINAL — {result_text}.", check_time)
            elif api_status != previous_status:
                add_history(status, "state", f"{game.get('id')}: API status {api_status}.", check_time)

        add_history(status, "check",
                    f"Checked ESPN states/results for {len(unresolved)} unresolved game(s); "
                    f"{final_count} newly final.", check_time)

        if games_changed:
            write_js_object(GAMES_PATH, game_prefix, games_data, game_suffix)

        next_check, reason = compute_next_check(games, utc_now())
        status["status"] = "complete" if next_check is None else "ok"
        status["nextEligibleCheck"] = iso(next_check)
        status["nextCheckReason"] = reason
        save_status(status_prefix, status, status_suffix)
        return 0

    except Exception as exc:
        error_time = utc_now()
        status["status"] = "error"
        status["lastError"] = str(exc)
        add_history(status, "error", str(exc), error_time)

        # On an API failure while games are due, a retry in 15 minutes is appropriate.
        status["nextEligibleCheck"] = iso(error_time + timedelta(minutes=CHECK_INTERVAL_MINUTES))
        status["nextCheckReason"] = "Retry after the most recent updater error."
        save_status(status_prefix, status, status_suffix)

        print(f"ERROR: {exc}", file=sys.stderr)
        return 1


if __name__ == "__main__":
    raise SystemExit(main())
