/* Football Pool Simulator — NFL game state.
   This is the frequently updated file: matchups, probabilities, finals, and winners. */

const GAMES_DATA = {
  "games": [
    {
      "id": "SEA-DEN",
      "away": "SEA",
      "home": "DEN",
      "time": "THU 8:15 PM",
      "favorite": "SEA",
      "pAway": 0.569614,
      "final": true,
      "winner": "DEN",
      "kickoff": "2026-10-16T00:15Z",
      "apiStatus": "final",
      "apiStatusCheckedAt": "2026-10-16T03:35:42.001992Z",
      "awayScore": 14,
      "homeScore": 17
    },
    {
      "id": "HOU-JAX",
      "away": "HOU",
      "home": "JAX",
      "time": "SUN 9:30 AM",
      "favorite": "JAX",
      "pAway": 0.434397,
      "final": true,
      "winner": "HOU",
      "kickoff": "2026-10-18T13:30Z",
      "apiStatus": "final",
      "apiStatusCheckedAt": "2026-10-18T16:53:50.615344Z",
      "awayScore": 34,
      "homeScore": 31
    },
    {
      "id": "CHI-ATL",
      "away": "CHI",
      "home": "ATL",
      "time": "SUN 1:00 PM",
      "favorite": "CHI",
      "pAway": 0.512003,
      "final": true,
      "winner": "CHI",
      "kickoff": "2026-10-18T17:00Z",
      "apiStatus": "final",
      "apiStatusCheckedAt": "2026-10-18T20:27:38.775915Z",
      "awayScore": 31,
      "homeScore": 23
    },
    {
      "id": "BAL-CLE",
      "away": "BAL",
      "home": "CLE",
      "time": "SUN 1:00 PM",
      "favorite": "BAL",
      "pAway": 0.656489,
      "final": true,
      "winner": "CLE",
      "kickoff": "2026-10-18T17:00Z",
      "apiStatus": "final",
      "apiStatusCheckedAt": "2026-10-18T20:14:11.064907Z",
      "awayScore": 10,
      "homeScore": 13
    },
    {
      "id": "TEN-IND",
      "away": "TEN",
      "home": "IND",
      "time": "SUN 1:00 PM",
      "favorite": "IND",
      "pAway": 0.260566,
      "final": true,
      "winner": "TEN",
      "kickoff": "2026-10-18T17:00Z",
      "apiStatus": "final",
      "apiStatusCheckedAt": "2026-10-18T20:14:11.064907Z",
      "awayScore": 26,
      "homeScore": 20
    },
    {
      "id": "NYJ-NE",
      "away": "NYJ",
      "home": "NE",
      "time": "SUN 1:00 PM",
      "favorite": "NE",
      "pAway": 0.256306,
      "final": true,
      "winner": "NE",
      "kickoff": "2026-10-18T17:00Z",
      "apiStatus": "final",
      "apiStatusCheckedAt": "2026-10-18T20:14:11.064907Z",
      "awayScore": 19,
      "homeScore": 26
    },
    {
      "id": "NO-NYG",
      "away": "NO",
      "home": "NYG",
      "time": "SUN 1:00 PM",
      "favorite": "NO",
      "pAway": 0.506587,
      "final": true,
      "winner": "NO",
      "kickoff": "2026-10-18T17:00Z",
      "apiStatus": "final",
      "apiStatusCheckedAt": "2026-10-18T20:27:38.775915Z",
      "awayScore": 34,
      "homeScore": 27
    },
    {
      "id": "CAR-PHI",
      "away": "CAR",
      "home": "PHI",
      "time": "SUN 1:00 PM",
      "favorite": "PHI",
      "pAway": 0.625222,
      "final": true,
      "winner": "CAR",
      "kickoff": "2026-10-18T17:00Z",
      "apiStatus": "final",
      "apiStatusCheckedAt": "2026-10-18T20:27:38.775915Z",
      "awayScore": 25,
      "homeScore": 14
    },
    {
      "id": "PIT-TB",
      "away": "PIT",
      "home": "TB",
      "time": "SUN 1:00 PM",
      "favorite": "PIT",
      "pAway": 0.561651,
      "final": true,
      "winner": "PIT",
      "kickoff": "2026-10-18T17:00Z",
      "apiStatus": "final",
      "apiStatusCheckedAt": "2026-10-18T20:45:10.803283Z",
      "awayScore": 26,
      "homeScore": 19
    },
    {
      "id": "ARI-LAR",
      "away": "ARI",
      "home": "LAR",
      "time": "SUN 4:05 PM",
      "favorite": "LAR",
      "pAway": 0.147019,
      "final": false,
      "winner": null,
      "kickoff": "2026-10-18T20:05Z",
      "apiStatus": "underway",
      "apiStatusCheckedAt": "2026-10-18T21:43:34.046498Z",
      "awayScore": 9,
      "homeScore": 9
    },
    {
      "id": "LAC-KC",
      "away": "LAC",
      "home": "KC",
      "time": "SUN 4:25 PM",
      "favorite": "KC",
      "pAway": 0.219553,
      "final": false,
      "winner": null,
      "kickoff": "2026-10-18T20:25Z",
      "apiStatus": "underway",
      "apiStatusCheckedAt": "2026-10-18T21:43:34.046498Z",
      "awayScore": 3,
      "homeScore": 16
    },
    {
      "id": "BUF-LV",
      "away": "BUF",
      "home": "LV",
      "time": "SUN 4:25 PM",
      "favorite": "BUF",
      "pAway": 0.676239,
      "final": false,
      "winner": null,
      "kickoff": "2026-10-18T20:25Z",
      "apiStatus": "underway",
      "apiStatusCheckedAt": "2026-10-18T21:43:34.046498Z",
      "awayScore": 13,
      "homeScore": 10
    },
    {
      "id": "DAL-GB",
      "away": "DAL",
      "home": "GB",
      "time": "SUN 8:20 PM",
      "favorite": "GB",
      "pAway": 0.479212,
      "final": false,
      "winner": null,
      "kickoff": "2026-10-19T00:20Z",
      "apiStatus": "pre-game",
      "apiStatusCheckedAt": "2026-10-18T21:43:34.046498Z"
    },
    {
      "id": "WAS-SF",
      "away": "WAS",
      "home": "SF",
      "time": "MON 8:15 PM",
      "favorite": "SF",
      "pAway": 0.227496,
      "final": false,
      "winner": null,
      "kickoff": "2026-10-20T00:15Z",
      "apiStatus": "pre-game",
      "apiStatusCheckedAt": "2026-10-18T21:43:34.046498Z"
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
    "url": "https://fantasydata.com/nfl/odds",
    "scheduleUrl": "https://www.nfl.com/news/nfl-how-to-watch-week-6-nfl-games-schedule-london-game-details-and-more",
    "retrievedAt": "2026-10-16T00:26:31.338Z",
    "method": "Two-sided FantasyData consensus moneylines normalized to remove bookmaker margin",
    "moneylines": [
      {
        "id": "SEA-DEN",
        "awayML": -146,
        "homeML": 123
      },
      {
        "id": "HOU-JAX",
        "awayML": 120,
        "homeML": -145
      },
      {
        "id": "CHI-ATL",
        "awayML": -115,
        "homeML": -104
      },
      {
        "id": "BAL-CLE",
        "awayML": -215,
        "homeML": 180
      },
      {
        "id": "TEN-IND",
        "awayML": 267,
        "homeML": -341
      },
      {
        "id": "NYJ-NE",
        "awayML": 275,
        "homeML": -342
      },
      {
        "id": "NO-NYG",
        "awayML": -112,
        "homeML": -106
      },
      {
        "id": "CAR-PHI",
        "awayML": -185,
        "homeML": 157
      },
      {
        "id": "PIT-TB",
        "awayML": -141,
        "homeML": 119
      },
      {
        "id": "ARI-LAR",
        "awayML": 554,
        "homeML": -786
      },
      {
        "id": "LAC-KC",
        "awayML": 337,
        "homeML": -436
      },
      {
        "id": "BUF-LV",
        "awayML": -237,
        "homeML": 197
      },
      {
        "id": "DAL-GB",
        "awayML": 100,
        "homeML": -119
      },
      {
        "id": "WAS-SF",
        "awayML": 321,
        "homeML": -417
      }
    ]
  }
};
