/* Football Pool Simulator — NFL game state.
   This is the frequently updated file: matchups, probabilities, finals, and winners. */

const GAMES_DATA = {
  "games": [
    {
      "id": "TB-DAL",
      "away": "TB",
      "home": "DAL",
      "time": "THU 8:15 PM",
      "favorite": "DAL",
      "pAway": 0.202965,
      "final": false,
      "winner": null,
      "kickoff": "2026-10-09T00:15Z",
      "apiStatus": "underway",
      "apiStatusCheckedAt": "2026-10-09T03:16:52.139229Z"
    },
    {
      "id": "PHI-JAX",
      "away": "PHI",
      "home": "JAX",
      "time": "SUN 9:30 AM",
      "favorite": "JAX",
      "pAway": 0.239052,
      "final": false,
      "winner": null,
      "kickoff": "2026-10-11T13:30Z",
      "apiStatus": "pre-game",
      "apiStatusCheckedAt": "2026-10-09T03:16:52.139229Z"
    },
    {
      "id": "CHI-GB",
      "away": "CHI",
      "home": "GB",
      "time": "SUN 1:00 PM",
      "favorite": "CHI",
      "pAway": 0.533347,
      "final": false,
      "winner": null,
      "kickoff": "2026-10-11T17:00Z",
      "apiStatus": "pre-game",
      "apiStatusCheckedAt": "2026-10-09T03:16:52.139229Z"
    },
    {
      "id": "HOU-TEN",
      "away": "HOU",
      "home": "TEN",
      "time": "SUN 1:00 PM",
      "favorite": "HOU",
      "pAway": 0.76581,
      "final": false,
      "winner": null,
      "kickoff": "2026-10-11T17:00Z",
      "apiStatus": "pre-game",
      "apiStatusCheckedAt": "2026-10-09T03:16:52.139229Z"
    },
    {
      "id": "CIN-MIA",
      "away": "CIN",
      "home": "MIA",
      "time": "SUN 1:00 PM",
      "favorite": "CIN",
      "pAway": 0.734084,
      "final": false,
      "winner": null,
      "kickoff": "2026-10-11T17:00Z",
      "apiStatus": "pre-game",
      "apiStatusCheckedAt": "2026-10-09T03:16:52.139229Z"
    },
    {
      "id": "LV-NE",
      "away": "LV",
      "home": "NE",
      "time": "SUN 1:00 PM",
      "favorite": "NE",
      "pAway": 0.364368,
      "final": false,
      "winner": null,
      "kickoff": "2026-10-11T17:00Z",
      "apiStatus": "pre-game",
      "apiStatusCheckedAt": "2026-10-09T03:16:52.139229Z"
    },
    {
      "id": "MIN-NO",
      "away": "MIN",
      "home": "NO",
      "time": "SUN 1:00 PM",
      "favorite": "MIN",
      "pAway": 0.556036,
      "final": false,
      "winner": null,
      "kickoff": "2026-10-11T17:00Z",
      "apiStatus": "pre-game",
      "apiStatusCheckedAt": "2026-10-09T03:16:52.139229Z"
    },
    {
      "id": "CLE-NYJ",
      "away": "CLE",
      "home": "NYJ",
      "time": "SUN 1:00 PM",
      "favorite": "NYJ",
      "pAway": 0.443216,
      "final": false,
      "winner": null,
      "kickoff": "2026-10-11T17:00Z",
      "apiStatus": "pre-game",
      "apiStatusCheckedAt": "2026-10-09T03:16:52.139229Z"
    },
    {
      "id": "IND-PIT",
      "away": "IND",
      "home": "PIT",
      "time": "SUN 1:00 PM",
      "favorite": "PIT",
      "pAway": 0.433978,
      "final": false,
      "winner": null,
      "kickoff": "2026-10-11T17:00Z",
      "apiStatus": "pre-game",
      "apiStatusCheckedAt": "2026-10-09T03:16:52.139229Z"
    },
    {
      "id": "NYG-WAS",
      "away": "NYG",
      "home": "WAS",
      "time": "SUN 1:00 PM",
      "favorite": "WAS",
      "pAway": 0.363887,
      "final": false,
      "winner": null,
      "kickoff": "2026-10-11T17:00Z",
      "apiStatus": "pre-game",
      "apiStatusCheckedAt": "2026-10-09T03:16:52.139229Z"
    },
    {
      "id": "DEN-LAC",
      "away": "DEN",
      "home": "LAC",
      "time": "SUN 4:05 PM",
      "favorite": "DEN",
      "pAway": 0.617848,
      "final": false,
      "winner": null,
      "kickoff": "2026-10-11T20:05Z",
      "apiStatus": "pre-game",
      "apiStatusCheckedAt": "2026-10-09T03:16:52.139229Z"
    },
    {
      "id": "DET-ARI",
      "away": "DET",
      "home": "ARI",
      "time": "SUN 4:25 PM",
      "favorite": "DET",
      "pAway": 0.682254,
      "final": false,
      "winner": null,
      "kickoff": "2026-10-11T20:25Z",
      "apiStatus": "pre-game",
      "apiStatusCheckedAt": "2026-10-09T03:16:52.139229Z"
    },
    {
      "id": "SF-SEA",
      "away": "SF",
      "home": "SEA",
      "time": "SUN 4:25 PM",
      "favorite": "SEA",
      "pAway": 0.39982,
      "final": false,
      "winner": null,
      "kickoff": "2026-10-11T20:25Z",
      "apiStatus": "pre-game",
      "apiStatusCheckedAt": "2026-10-09T03:16:52.139229Z"
    },
    {
      "id": "BAL-ATL",
      "away": "BAL",
      "home": "ATL",
      "time": "SUN 8:20 PM",
      "favorite": "ATL",
      "pAway": 0.391763,
      "final": false,
      "winner": null,
      "kickoff": "2026-10-12T00:20Z",
      "apiStatus": "pre-game",
      "apiStatusCheckedAt": "2026-10-09T03:16:52.139229Z"
    },
    {
      "id": "BUF-LAR",
      "away": "BUF",
      "home": "LAR",
      "time": "MON 8:15 PM",
      "favorite": "LAR",
      "pAway": 0.389303,
      "final": false,
      "winner": null,
      "kickoff": "2026-10-13T00:15Z",
      "apiStatus": "pre-game",
      "apiStatusCheckedAt": "2026-10-09T03:16:52.139229Z"
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
    "url": "https://www.statmuse.com/nfl/ask/nfl-odds-week-5",
    "scheduleUrl": "https://www.fantasypros.com/nfl/schedule.php?week=5",
    "retrievedAt": "2026-10-09T00:19:38.727Z",
    "method": "Two-sided consensus moneylines normalized to remove bookmaker margin",
    "moneylines": [
      {
        "id": "TB-DAL",
        "awayML": 374,
        "homeML": -483
      },
      {
        "id": "PHI-JAX",
        "awayML": 301,
        "homeML": -385
      },
      {
        "id": "CHI-GB",
        "awayML": -126,
        "homeML": 105
      },
      {
        "id": "HOU-TEN",
        "awayML": -394,
        "homeML": 310
      },
      {
        "id": "CIN-MIA",
        "awayML": -325,
        "homeML": 261
      },
      {
        "id": "LV-NE",
        "awayML": 163,
        "homeML": -197
      },
      {
        "id": "MIN-NO",
        "awayML": -138,
        "homeML": 116
      },
      {
        "id": "CLE-NYJ",
        "awayML": 116,
        "homeML": -139
      },
      {
        "id": "IND-PIT",
        "awayML": 121,
        "homeML": -144
      },
      {
        "id": "NYG-WAS",
        "awayML": 164,
        "homeML": -196
      },
      {
        "id": "DEN-LAC",
        "awayML": -181,
        "homeML": 151
      },
      {
        "id": "DET-ARI",
        "awayML": -246,
        "homeML": 202
      },
      {
        "id": "SF-SEA",
        "awayML": 140,
        "homeML": -167
      },
      {
        "id": "BAL-ATL",
        "awayML": 145,
        "homeML": -173
      },
      {
        "id": "BUF-LAR",
        "awayML": 146,
        "homeML": -176
      }
    ]
  }
};
