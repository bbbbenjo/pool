/* Football Pool Simulator — NFL game state.
   This is the frequently updated file: matchups, probabilities, finals, and winners. */

const GAMES_DATA = {
  "games": [
    {
      "id": "NE-CHI",
      "away": "NE",
      "home": "CHI",
      "time": "THU 8:15 PM",
      "favorite": "CHI",
      "pAway": 0.411011,
      "final": true,
      "winner": "CHI",
      "kickoff": "2026-10-23T00:15Z",
      "awayScore": 24,
      "homeScore": 30,
      "apiStatus": "final",
      "apiStatusCheckedAt": "2026-10-23T03:46:20.486906Z"
    },
    {
      "id": "PIT-NO",
      "away": "PIT",
      "home": "NO",
      "time": "SUN 9:30 AM",
      "favorite": "PIT",
      "pAway": 0.607765,
      "final": false,
      "winner": null,
      "kickoff": "2026-10-25T13:30Z",
      "apiStatus": "pre-game",
      "apiStatusCheckedAt": "2026-10-23T03:46:20.486906Z"
    },
    {
      "id": "SF-ATL",
      "away": "SF",
      "home": "ATL",
      "time": "SUN 1:00 PM",
      "favorite": "SF",
      "pAway": 0.574234,
      "final": false,
      "winner": null,
      "kickoff": "2026-10-25T17:00Z",
      "apiStatus": "pre-game",
      "apiStatusCheckedAt": "2026-10-23T03:46:20.486906Z"
    },
    {
      "id": "CLE-TEN",
      "away": "CLE",
      "home": "TEN",
      "time": "SUN 1:00 PM",
      "favorite": "CLE",
      "pAway": 0.536961,
      "final": false,
      "winner": null,
      "kickoff": "2026-10-25T17:00Z",
      "apiStatus": "pre-game",
      "apiStatusCheckedAt": "2026-10-23T03:46:20.486906Z"
    },
    {
      "id": "IND-MIN",
      "away": "IND",
      "home": "MIN",
      "time": "SUN 1:00 PM",
      "favorite": "MIN",
      "pAway": 0.282546,
      "final": false,
      "winner": null,
      "kickoff": "2026-10-25T17:00Z",
      "apiStatus": "pre-game",
      "apiStatusCheckedAt": "2026-10-23T03:46:20.486906Z"
    },
    {
      "id": "MIA-NYJ",
      "away": "MIA",
      "home": "NYJ",
      "time": "SUN 1:00 PM",
      "favorite": "NYJ",
      "pAway": 0.326543,
      "final": false,
      "winner": null,
      "kickoff": "2026-10-25T17:00Z",
      "apiStatus": "pre-game",
      "apiStatusCheckedAt": "2026-10-23T03:46:20.486906Z"
    },
    {
      "id": "TB-CAR",
      "away": "TB",
      "home": "CAR",
      "time": "SUN 1:00 PM",
      "favorite": "CAR",
      "pAway": 0.417626,
      "final": false,
      "winner": null,
      "kickoff": "2026-10-25T17:00Z",
      "apiStatus": "pre-game",
      "apiStatusCheckedAt": "2026-10-23T03:46:20.486906Z"
    },
    {
      "id": "CIN-BAL",
      "away": "CIN",
      "home": "BAL",
      "time": "SUN 1:00 PM",
      "favorite": "BAL",
      "pAway": 0.475779,
      "final": false,
      "winner": null,
      "kickoff": "2026-10-25T17:00Z",
      "apiStatus": "pre-game",
      "apiStatusCheckedAt": "2026-10-23T03:46:20.486906Z"
    },
    {
      "id": "NYG-HOU",
      "away": "NYG",
      "home": "HOU",
      "time": "SUN 1:00 PM",
      "favorite": "HOU",
      "pAway": 0.188133,
      "final": false,
      "winner": null,
      "kickoff": "2026-10-25T17:00Z",
      "apiStatus": "pre-game",
      "apiStatusCheckedAt": "2026-10-23T03:46:20.486906Z"
    },
    {
      "id": "DEN-ARI",
      "away": "DEN",
      "home": "ARI",
      "time": "SUN 4:05 PM",
      "favorite": "DEN",
      "pAway": 0.651529,
      "final": false,
      "winner": null,
      "kickoff": "2026-10-25T20:05Z",
      "apiStatus": "pre-game",
      "apiStatusCheckedAt": "2026-10-23T03:46:20.486906Z"
    },
    {
      "id": "GB-DET",
      "away": "GB",
      "home": "DET",
      "time": "SUN 4:25 PM",
      "favorite": "DET",
      "pAway": 0.387379,
      "final": false,
      "winner": null,
      "kickoff": "2026-10-25T20:25Z",
      "apiStatus": "pre-game",
      "apiStatusCheckedAt": "2026-10-23T03:46:20.486906Z"
    },
    {
      "id": "LAR-LV",
      "away": "LAR",
      "home": "LV",
      "time": "SUN 4:25 PM",
      "favorite": "LAR",
      "pAway": 0.641148,
      "final": false,
      "winner": null,
      "kickoff": "2026-10-25T20:25Z",
      "apiStatus": "pre-game",
      "apiStatusCheckedAt": "2026-10-23T03:46:20.486906Z"
    },
    {
      "id": "KC-SEA",
      "away": "KC",
      "home": "SEA",
      "time": "SUN 8:20 PM",
      "favorite": "SEA",
      "pAway": 0.43287,
      "final": false,
      "winner": null,
      "kickoff": "2026-10-26T00:20Z",
      "apiStatus": "pre-game",
      "apiStatusCheckedAt": "2026-10-23T03:46:20.486906Z"
    },
    {
      "id": "DAL-PHI",
      "away": "DAL",
      "home": "PHI",
      "time": "MON 8:15 PM",
      "favorite": "DAL",
      "pAway": 0.636113,
      "final": false,
      "winner": null,
      "kickoff": "2026-10-27T00:15Z",
      "apiStatus": "pre-game",
      "apiStatusCheckedAt": "2026-10-23T03:46:20.486906Z"
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
    "url": "https://www.fanduel.com/research/nfl-week-7-schedule-odds-for-every-game",
    "scheduleUrl": "https://www.nfl.com/schedules/2026/by-week/week-7",
    "retrievedAt": "2026-10-23T00:13:40.952Z",
    "method": "Two-sided FanDuel moneylines normalized to remove bookmaker margin",
    "moneylines": [
      {
        "id": "NE-CHI",
        "awayML": 134,
        "homeML": -158
      },
      {
        "id": "PIT-NO",
        "awayML": -174,
        "homeML": 144
      },
      {
        "id": "SF-ATL",
        "awayML": -148,
        "homeML": 126
      },
      {
        "id": "CLE-TEN",
        "awayML": -126,
        "homeML": 108
      },
      {
        "id": "IND-MIN",
        "awayML": 240,
        "homeML": -295
      },
      {
        "id": "MIA-NYJ",
        "awayML": 194,
        "homeML": -235
      },
      {
        "id": "TB-CAR",
        "awayML": 130,
        "homeML": -154
      },
      {
        "id": "CIN-BAL",
        "awayML": 102,
        "homeML": -120
      },
      {
        "id": "NYG-HOU",
        "awayML": 410,
        "homeML": -550
      },
      {
        "id": "DEN-ARI",
        "awayML": -210,
        "homeML": 176
      },
      {
        "id": "GB-DET",
        "awayML": 148,
        "homeML": -176
      },
      {
        "id": "LAR-LV",
        "awayML": -200,
        "homeML": 168
      },
      {
        "id": "KC-SEA",
        "awayML": 122,
        "homeML": -144
      },
      {
        "id": "DAL-PHI",
        "awayML": -196,
        "homeML": 164
      }
    ]
  }
};
