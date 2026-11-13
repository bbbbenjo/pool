/* Football Pool Simulator — NFL game state.
   This is the frequently updated file: matchups, probabilities, finals, and winners. */

const GAMES_DATA = {
  "games": [
    {
      "id": "WAS-NYG",
      "away": "WAS",
      "home": "NYG",
      "time": "THU 8:15 PM",
      "kickoff": "2026-11-13T01:15:00Z",
      "favorite": "NYG",
      "pAway": 0.467212,
      "final": true,
      "winner": "WAS",
      "awayScore": 24,
      "homeScore": 21,
      "apiStatus": "final"
    },
    {
      "id": "NE-DET",
      "away": "NE",
      "home": "DET",
      "time": "SUN 9:30 AM",
      "kickoff": "2026-11-15T14:30:00Z",
      "favorite": "DET",
      "pAway": 0.42101,
      "final": false,
      "winner": null
    },
    {
      "id": "KC-ATL",
      "away": "KC",
      "home": "ATL",
      "time": "SUN 1:00 PM",
      "kickoff": "2026-11-15T18:00:00Z",
      "favorite": "KC",
      "pAway": 0.609709,
      "final": false,
      "winner": null
    },
    {
      "id": "HOU-CLE",
      "away": "HOU",
      "home": "CLE",
      "time": "SUN 1:00 PM",
      "kickoff": "2026-11-15T18:00:00Z",
      "favorite": "HOU",
      "pAway": 0.673457,
      "final": false,
      "winner": null
    },
    {
      "id": "MIN-GB",
      "away": "MIN",
      "home": "GB",
      "time": "SUN 1:00 PM",
      "kickoff": "2026-11-15T18:00:00Z",
      "favorite": "GB",
      "pAway": 0.403472,
      "final": false,
      "winner": null
    },
    {
      "id": "JAX-TEN",
      "away": "JAX",
      "home": "TEN",
      "time": "SUN 1:00 PM",
      "kickoff": "2026-11-15T18:00:00Z",
      "favorite": "JAX",
      "pAway": 0.84,
      "final": false,
      "winner": null
    },
    {
      "id": "MIA-IND",
      "away": "MIA",
      "home": "IND",
      "time": "SUN 1:00 PM",
      "kickoff": "2026-11-15T18:00:00Z",
      "favorite": "IND",
      "pAway": 0.358852,
      "final": false,
      "winner": null
    },
    {
      "id": "CAR-NO",
      "away": "CAR",
      "home": "NO",
      "time": "SUN 1:00 PM",
      "kickoff": "2026-11-15T18:00:00Z",
      "favorite": "NO",
      "pAway": 0.44169,
      "final": false,
      "winner": null
    },
    {
      "id": "BUF-NYJ",
      "away": "BUF",
      "home": "NYJ",
      "time": "SUN 1:00 PM",
      "kickoff": "2026-11-15T18:00:00Z",
      "favorite": "BUF",
      "pAway": 0.772329,
      "final": false,
      "winner": null
    },
    {
      "id": "SEA-LV",
      "away": "SEA",
      "home": "LV",
      "time": "SUN 4:05 PM",
      "kickoff": "2026-11-15T21:05:00Z",
      "favorite": "SEA",
      "pAway": 0.721254,
      "final": false,
      "winner": null
    },
    {
      "id": "LAR-ARI",
      "away": "LAR",
      "home": "ARI",
      "time": "SUN 4:05 PM",
      "kickoff": "2026-11-15T21:05:00Z",
      "favorite": "LAR",
      "pAway": 0.803795,
      "final": false,
      "winner": null
    },
    {
      "id": "SF-DAL",
      "away": "SF",
      "home": "DAL",
      "time": "SUN 4:25 PM",
      "kickoff": "2026-11-15T21:25:00Z",
      "favorite": "SF",
      "pAway": 0.651529,
      "final": false,
      "winner": null
    },
    {
      "id": "PIT-CIN",
      "away": "PIT",
      "home": "CIN",
      "time": "SUN 8:20 PM",
      "kickoff": "2026-11-16T01:20:00Z",
      "favorite": "CIN",
      "pAway": 0.375249,
      "final": false,
      "winner": null
    },
    {
      "id": "LAC-BAL",
      "away": "LAC",
      "home": "BAL",
      "time": "MON 8:15 PM",
      "kickoff": "2026-11-17T01:15:00Z",
      "favorite": "BAL",
      "pAway": 0.33557,
      "final": false,
      "winner": null
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
    "url": "https://www.fanduel.com/research/nfl-odds-week-10-schedule-betting-odds-for-every-game",
    "thursdayUrl": "https://getoddy.com/nfl/games/commanders-giants-2026-11-12",
    "scheduleUrl": "https://www.nfl.com/schedules/2026/by-week/week-10",
    "retrievedAt": "2026-11-13T11:35:32.958Z",
    "method": "FanDuel two-sided moneylines normalized to remove bookmaker margin. Thursday uses the archived FanDuel closing line.",
    "moneylines": [
      {
        "id": "WAS-NYG",
        "awayML": 106,
        "homeML": -124
      },
      {
        "id": "NE-DET",
        "awayML": 128,
        "homeML": -152
      },
      {
        "id": "KC-ATL",
        "awayML": -174,
        "homeML": 146
      },
      {
        "id": "HOU-CLE",
        "awayML": -235,
        "homeML": 194
      },
      {
        "id": "MIN-GB",
        "awayML": 138,
        "homeML": -164
      },
      {
        "id": "JAX-TEN",
        "awayML": -700,
        "homeML": 500
      },
      {
        "id": "MIA-IND",
        "awayML": 168,
        "homeML": -200
      },
      {
        "id": "CAR-NO",
        "awayML": 118,
        "homeML": -138
      },
      {
        "id": "BUF-NYJ",
        "awayML": -420,
        "homeML": 320
      },
      {
        "id": "SEA-LV",
        "awayML": -300,
        "homeML": 245
      },
      {
        "id": "LAR-ARI",
        "awayML": -510,
        "homeML": 390
      },
      {
        "id": "SF-DAL",
        "awayML": -210,
        "homeML": 176
      },
      {
        "id": "PIT-CIN",
        "awayML": 156,
        "homeML": -186
      },
      {
        "id": "LAC-BAL",
        "awayML": 188,
        "homeML": -220
      }
    ]
  }
};
