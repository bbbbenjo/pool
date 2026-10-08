#!/usr/bin/env python3
"""
Update games-data.js from ESPN's NFL scoreboard endpoint.

Safety rules:
- A game is NEVER marked final unless ESPN explicitly reports completed=true
  and the status state is "post" (or the status name is a FINAL status).
- A score alone is never used to decide whether a game is final.
- Team matchups are validated before any result is written.
- If games-data.js does not yet contain exact kickoff timestamps, the script
  learns them from the weekly schedule and writes them into games-data.js.
- Once kickoff timestamps exist locally, the script makes NO web request
  until at least RESULT_DELAY_MINUTES after an unresolved game's kickoff.

This lets a GitHub Action wake up frequently while avoiding pointless
scoreboard requests before a result could reasonably exist.
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

RESULT_DELAY_MINUTES = int(os.environ.get("RESULT_DELAY_MINUTES", "150"))
ESPN_URL = "https://site.api.espn.com/apis/site/v2/sports/football/nfl/scoreboard"

# Normalize source abbreviations to the abbreviations used by the pool.
TEAM_ALIASES = {
    "WSH": "WAS",
    "JAC": "JAX",
}


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
    prefix = text[: match.start(2)]
    suffix = text[match.end(2) :]
    return prefix, obj, suffix


def write_js_object(path: Path, prefix: str, obj: dict, suffix: str) -> None:
    rendered = json.dumps(obj, indent=2, ensure_ascii=False)
    path.write_text(prefix + rendered + suffix, encoding="utf-8")


def season_for_today(now: datetime) -> int:
    # NFL January/February games belong to the season that began the prior year.
    return now.year - 1 if now.month <= 2 else now.year


def parse_iso(iso_text: str) -> datetime:
    text = iso_text.strip()
    if text.endswith("Z"):
        text = text[:-1] + "+00:00"
    dt = datetime.fromisoformat(text)
    if dt.tzinfo is None:
        dt = dt.replace(tzinfo=timezone.utc)
    return dt.astimezone(timezone.utc)


def espn_week_data(season: int, week: int, season_type: int) -> dict:
    fixture = os.environ.get("NFL_RESULTS_FIXTURE")
    if fixture:
        print(f"Using local ESPN fixture: {fixture}")
        return json.loads(Path(fixture).read_text(encoding="utf-8"))

    params = urllib.parse.urlencode(
        {
            "season": season,
            "seasontype": season_type,
            "week": week,
        }
    )
    url = f"{ESPN_URL}?{params}"
    print(f"Fetching NFL Week {week} schedule/results from ESPN.")
    request = urllib.request.Request(
        url,
        headers={
            "User-Agent": "football-pool-result-updater/1.0",
            "Accept": "application/json",
        },
    )
    with urllib.request.urlopen(request, timeout=20) as response:
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
        "event_id": event.get("id"),
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
        if not info:
            continue
        key = frozenset(info["teams"].keys())
        if len(key) == 2:
            result[key] = info
    return result


def game_key(game: dict) -> frozenset[str]:
    return frozenset(
        {
            normalize_team(game.get("away", "")),
            normalize_team(game.get("home", "")),
        }
    )


def determine_winner(info: dict) -> str:
    teams = info["teams"]

    winners = [
        team
        for team, competitor in teams.items()
        if competitor.get("winner") is True
    ]
    if len(winners) == 1:
        return winners[0]

    # A tie is determined from equal scores ONLY after explicit final status
    # has already been verified.
    scores = []
    for team, competitor in teams.items():
        raw = competitor.get("score")
        try:
            scores.append((team, int(raw)))
        except (TypeError, ValueError):
            raise RuntimeError(
                f"Final game has no usable winner flag and invalid score for {team}: {raw!r}"
            )

    if len(scores) == 2 and scores[0][1] == scores[1][1]:
        return "TIE"

    # If ESPN says the game is final but provides neither a winner flag nor
    # equal scores, stop rather than guessing.
    raise RuntimeError(
        "ESPN reports a final game but winner/tie could not be determined safely."
    )


def main() -> int:
    if not GAMES_PATH.exists() or not PICKS_PATH.exists():
        raise RuntimeError("games-data.js and picks-data.js must exist in the repository root.")

    game_prefix, games_data, game_suffix = load_js_object(GAMES_PATH, "GAMES_DATA")
    _, picks_data, _ = load_js_object(PICKS_PATH, "PICKS_DATA")

    week = int(picks_data["week"])
    now = datetime.now(timezone.utc)

    season = int(picks_data.get("season", season_for_today(now)))
    season_type = int(picks_data.get("seasonType", 2))

    games = games_data.get("games") or []
    unresolved = [g for g in games if not g.get("final", False)]

    if not unresolved:
        print("All games are already final. No web request needed.")
        return 0

    # If any unresolved game lacks an exact kickoff, fetch the weekly schedule
    # once so the repository can learn and persist the schedule.
    needs_schedule = any(not g.get("kickoff") for g in unresolved)

    payload = None
    event_map = None
    changed = False

    if needs_schedule:
        payload = espn_week_data(season, week, season_type)
        event_map = build_event_map(payload)

        missing = []
        for game in games:
            info = event_map.get(game_key(game))
            if not info:
                missing.append(game.get("id", "?"))
                continue
            kickoff = info.get("kickoff")
            if kickoff and game.get("kickoff") != kickoff:
                game["kickoff"] = kickoff
                changed = True

        if missing:
            raise RuntimeError(
                "Could not match these pool games to the NFL schedule: "
                + ", ".join(missing)
            )

    # Now that schedule timestamps are available, determine whether a result
    # could plausibly exist. If not, exit without another network request.
    due_games = []
    for game in unresolved:
        kickoff_text = game.get("kickoff")
        if not kickoff_text:
            continue
        kickoff = parse_iso(kickoff_text)
        due_at = kickoff + timedelta(minutes=RESULT_DELAY_MINUTES)
        if now >= due_at:
            due_games.append(game)

    if not due_games:
        if changed:
            write_js_object(GAMES_PATH, game_prefix, games_data, game_suffix)
            print("NFL schedule learned and saved. No game is due for a result check yet.")
        else:
            next_due = min(
                parse_iso(g["kickoff"]) + timedelta(minutes=RESULT_DELAY_MINUTES)
                for g in unresolved
                if g.get("kickoff")
            )
            print(
                "No unresolved game is due for a result check. "
                f"Next possible check: {next_due.isoformat()}"
            )
        return 0

    # If schedule seeding already fetched the weekly payload, reuse it.
    # Otherwise this is the first actual scoreboard request of this run.
    if payload is None:
        payload = espn_week_data(season, week, season_type)
        event_map = build_event_map(payload)

    assert event_map is not None

    # Refresh kickoff timestamps whenever we do query ESPN, which also lets
    # the local schedule absorb a flex or postponement.
    for game in games:
        info = event_map.get(game_key(game))
        if not info:
            continue
        kickoff = info.get("kickoff")
        if kickoff and game.get("kickoff") != kickoff:
            game["kickoff"] = kickoff
            changed = True

    due_keys = {game_key(g) for g in due_games}

    for game in games:
        if game.get("final", False):
            continue

        key = game_key(game)
        if key not in due_keys:
            continue

        info = event_map.get(key)
        if not info:
            raise RuntimeError(
                f"Due game {game.get('id')} was not found in ESPN's Week {week} scoreboard."
            )

        if not info["explicit_final"]:
            print(
                f"{game.get('id')}: not final yet "
                f"({info['status_name'] or info['state'] or 'unknown status'})."
            )
            continue

        winner = determine_winner(info)
        game["final"] = True
        game["winner"] = winner
        changed = True
        print(f"{game.get('id')}: FINAL — {winner}")

    if changed:
        write_js_object(GAMES_PATH, game_prefix, games_data, game_suffix)
        print("games-data.js updated.")
    else:
        print("No finalized results to write.")

    return 0


if __name__ == "__main__":
    try:
        raise SystemExit(main())
    except Exception as exc:
        print(f"ERROR: {exc}", file=sys.stderr)
        raise
