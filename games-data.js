/* Football Pool Simulator — NFL game state.
   This is the frequently updated file: matchups, probabilities, finals, and winners. */

const GAMES_DATA = {
  "games": [
    {
      "id": "CAR-GB",
      "away": "CAR",
      "home": "GB",
      "time": "THU 8:15 PM",
      "favorite": "GB",
      "pAway": 0.361352,
      "final": false,
      "winner": null,
      "kickoff": "2026-10-30T00:15:00Z"
    },
    {
      "id": "BAL-BUF",
      "away": "BAL",
      "home": "BUF",
      "time": "SUN 1:00 PM",
      "favorite": "BUF",
      "pAway": 0.397296,
      "final": false,
      "winner": null,
      "kickoff": "2026-11-01T18:00:00Z"
    },
    {
      "id": "TEN-CIN",
      "away": "TEN",
      "home": "CIN",
      "time": "SUN 1:00 PM",
      "favorite": "CIN",
      "pAway": 0.16,
      "final": false,
      "winner": null,
      "kickoff": "2026-11-01T18:00:00Z"
    },
    {
      "id": "ARI-DAL",
      "away": "ARI",
      "home": "DAL",
      "time": "SUN 1:00 PM",
      "favorite": "DAL",
      "pAway": 0.252809,
      "final": false,
      "winner": null,
      "kickoff": "2026-11-01T18:00:00Z"
    },
    {
      "id": "MIN-DET",
      "away": "MIN",
      "home": "DET",
      "time": "SUN 1:00 PM",
      "favorite": "DET",
      "pAway": 0.393245,
      "final": false,
      "winner": null,
      "kickoff": "2026-11-01T18:00:00Z"
    },
    {
      "id": "LV-NYJ",
      "away": "LV",
      "home": "NYJ",
      "time": "SUN 1:00 PM",
      "favorite": "NYJ",
      "pAway": 0.463039,
      "final": false,
      "winner": null,
      "kickoff": "2026-11-01T18:00:00Z"
    },
    {
      "id": "CLE-PIT",
      "away": "CLE",
      "home": "PIT",
      "time": "SUN 1:00 PM",
      "favorite": "PIT",
      "pAway": 0.372555,
      "final": false,
      "winner": null,
      "kickoff": "2026-11-01T18:00:00Z"
    },
    {
      "id": "ATL-TB",
      "away": "ATL",
      "home": "TB",
      "time": "SUN 1:00 PM",
      "favorite": "TB",
      "pAway": 0.457256,
      "final": false,
      "winner": null,
      "kickoff": "2026-11-01T18:00:00Z"
    },
    {
      "id": "IND-JAX",
      "away": "IND",
      "home": "JAX",
      "time": "SUN 1:00 PM",
      "favorite": "JAX",
      "pAway": 0.196205,
      "final": false,
      "winner": null,
      "kickoff": "2026-11-01T18:00:00Z"
    },
    {
      "id": "LAC-LAR",
      "away": "LAC",
      "home": "LAR",
      "time": "SUN 4:05 PM",
      "favorite": "LAR",
      "pAway": 0.278746,
      "final": false,
      "winner": null,
      "kickoff": "2026-11-01T21:05:00Z"
    },
    {
      "id": "KC-DEN",
      "away": "KC",
      "home": "DEN",
      "time": "SUN 4:25 PM",
      "favorite": "KC",
      "pAway": 0.519824,
      "final": false,
      "winner": null,
      "kickoff": "2026-11-01T21:25:00Z"
    },
    {
      "id": "NE-MIA",
      "away": "NE",
      "home": "MIA",
      "time": "SUN 4:25 PM",
      "favorite": "NE",
      "pAway": 0.725753,
      "final": false,
      "winner": null,
      "kickoff": "2026-11-01T21:25:00Z"
    },
    {
      "id": "PHI-WAS",
      "away": "PHI",
      "home": "WAS",
      "time": "SUN 8:20 PM",
      "favorite": "WAS",
      "pAway": 0.299838,
      "final": false,
      "winner": null,
      "kickoff": "2026-11-02T01:20:00Z"
    },
    {
      "id": "CHI-SEA",
      "away": "CHI",
      "home": "SEA",
      "time": "MON 8:15 PM",
      "favorite": "SEA",
      "pAway": 0.397296,
      "final": false,
      "winner": null,
      "kickoff": "2026-11-03T01:15:00Z"
    }
  ],
  "colors": {
    "ARI": "#97233F",
    "ATL": "#A71930",
    "BAL": "#241773",
    "BUF": "#00338D",
    "CAR": "#0085CA",
    "CHI": "#0B162A",
    "CIN": "#FB4F14",
    "CLE": "#311D00",
    "DAL": "#003594",
    "DEN": "#FB4F14",
    "DET": "#0076B6",
    "GB": "#203731",
    "HOU": "#03202F",
    "IND": "#002C5F",
    "JAX": "#006778",
    "KC": "#E31837",
    "LV": "#000000",
    "LAC": "#007BC7",
    "LAR": "#003594",
    "MIA": "#008E97",
    "MIN": "#4F2683",
    "NE": "#002244",
    "NO": "#101820",
    "NYG": "#0B2265",
    "NYJ": "#125740",
    "PHI": "#004C54",
    "PIT": "#101820",
    "SF": "#AA0000",
    "SEA": "#002244",
    "TB": "#A71930",
    "TEN": "#0C2340",
    "WAS": "#5A1414"
  },
  "oddsSource": {
    "url": "https://www.fanduel.com/research/nfl-week-8-schedule-odds-for-every-game",
    "scheduleUrl": "https://www.nfl.com/schedules/2026/by-week/week-8",
    "retrievedAt": "2026-10-30T00:22:30.660Z",
    "method": "Two-sided FanDuel moneylines normalized to remove bookmaker margin",
    "moneylines": [
      {
        "id": "CAR-GB",
        "awayML": 166,
        "homeML": -198
      },
      {
        "id": "BAL-BUF",
        "awayML": 142,
        "homeML": -168
      },
      {
        "id": "TEN-CIN",
        "awayML": 500,
        "homeML": -700
      },
      {
        "id": "ARI-DAL",
        "awayML": 280,
        "homeML": -350
      },
      {
        "id": "MIN-DET",
        "awayML": 144,
        "homeML": -172
      },
      {
        "id": "LV-NYJ",
        "awayML": 108,
        "homeML": -126
      },
      {
        "id": "CLE-PIT",
        "awayML": 158,
        "homeML": -188
      },
      {
        "id": "ATL-TB",
        "awayML": 110,
        "homeML": -130
      },
      {
        "id": "IND-JAX",
        "awayML": 390,
        "homeML": -510
      },
      {
        "id": "LAC-LAR",
        "awayML": 245,
        "homeML": -300
      },
      {
        "id": "KC-DEN",
        "awayML": -118,
        "homeML": 100
      },
      {
        "id": "NE-MIA",
        "awayML": -310,
        "homeML": 250
      },
      {
        "id": "PHI-WAS",
        "awayML": 220,
        "homeML": -270
      },
      {
        "id": "CHI-SEA",
        "awayML": 142,
        "homeML": -168
      }
    ]
  }
};
