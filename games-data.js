/* Football Pool Simulator — NFL game state.
   This is the frequently updated file: matchups, probabilities, finals, and winners. */

const GAMES_DATA = {
  "games": [
    {
      "id": "JAX-BAL",
      "away": "JAX",
      "home": "BAL",
      "time": "THU 8:15 PM",
      "favorite": "JAX",
      "pAway": 0.786408,
      "final": true,
      "winner": "JAX",
      "kickoff": "2026-11-06T01:15Z",
      "awayScore": 33,
      "homeScore": 10,
      "apiStatus": "final",
      "apiStatusCheckedAt": "2026-11-06T07:09:50.509370Z"
    },
    {
      "id": "CIN-ATL",
      "away": "CIN",
      "home": "ATL",
      "time": "SUN 9:30 AM",
      "favorite": "CIN",
      "pAway": 0.599092,
      "final": true,
      "winner": "CIN",
      "kickoff": "2026-11-08T14:30Z",
      "apiStatus": "final",
      "apiStatusCheckedAt": "2026-11-08T19:09:50.069565Z",
      "awayScore": 34,
      "homeScore": 17
    },
    {
      "id": "DAL-IND",
      "away": "DAL",
      "home": "IND",
      "time": "SUN 1:00 PM",
      "favorite": "DAL",
      "pAway": 0.69577,
      "final": true,
      "winner": "DAL",
      "kickoff": "2026-11-08T18:00Z",
      "apiStatus": "final",
      "apiStatusCheckedAt": "2026-11-08T22:27:03.602395Z",
      "awayScore": 27,
      "homeScore": 23
    },
    {
      "id": "NYJ-KC",
      "away": "NYJ",
      "home": "KC",
      "time": "SUN 1:00 PM",
      "favorite": "KC",
      "pAway": 0.195465,
      "final": true,
      "winner": "KC",
      "kickoff": "2026-11-08T18:00Z",
      "apiStatus": "final",
      "apiStatusCheckedAt": "2026-11-08T22:27:03.602395Z",
      "awayScore": 12,
      "homeScore": 35
    },
    {
      "id": "DET-MIA",
      "away": "DET",
      "home": "MIA",
      "time": "SUN 1:00 PM",
      "favorite": "DET",
      "pAway": 0.744681,
      "final": true,
      "winner": "DET",
      "kickoff": "2026-11-08T18:00Z",
      "apiStatus": "final",
      "apiStatusCheckedAt": "2026-11-08T22:27:03.602395Z",
      "awayScore": 19,
      "homeScore": 9
    },
    {
      "id": "CLE-NO",
      "away": "CLE",
      "home": "NO",
      "time": "SUN 1:00 PM",
      "favorite": "NO",
      "pAway": 0.423925,
      "final": true,
      "winner": "NO",
      "kickoff": "2026-11-08T18:00Z",
      "apiStatus": "final",
      "apiStatusCheckedAt": "2026-11-08T22:27:03.602395Z",
      "awayScore": 22,
      "homeScore": 23
    },
    {
      "id": "NYG-PHI",
      "away": "NYG",
      "home": "PHI",
      "time": "SUN 1:00 PM",
      "favorite": "NYG",
      "pAway": 0.599092,
      "final": true,
      "winner": "NYG",
      "kickoff": "2026-11-08T18:00Z",
      "apiStatus": "final",
      "apiStatusCheckedAt": "2026-11-08T22:27:03.602395Z",
      "awayScore": 19,
      "homeScore": 11
    },
    {
      "id": "LAR-WAS",
      "away": "LAR",
      "home": "WAS",
      "time": "SUN 1:00 PM",
      "favorite": "LAR",
      "pAway": 0.680556,
      "final": true,
      "winner": "LAR",
      "kickoff": "2026-11-08T18:00Z",
      "apiStatus": "final",
      "apiStatusCheckedAt": "2026-11-08T22:27:03.602395Z",
      "awayScore": 20,
      "homeScore": 13
    },
    {
      "id": "DEN-CAR",
      "away": "DEN",
      "home": "CAR",
      "time": "SUN 1:00 PM",
      "favorite": "DEN",
      "pAway": 0.577918,
      "final": true,
      "winner": "DEN",
      "kickoff": "2026-11-08T18:00Z",
      "apiStatus": "final",
      "apiStatusCheckedAt": "2026-11-08T22:27:03.602395Z",
      "awayScore": 26,
      "homeScore": 21
    },
    {
      "id": "HOU-LAC",
      "away": "HOU",
      "home": "LAC",
      "time": "SUN 4:05 PM",
      "favorite": "HOU",
      "pAway": 0.65812,
      "final": false,
      "winner": null,
      "kickoff": "2026-11-08T21:05Z",
      "apiStatus": "underway",
      "apiStatusCheckedAt": "2026-11-08T22:27:03.602395Z",
      "awayScore": 17,
      "homeScore": 9
    },
    {
      "id": "GB-NE",
      "away": "GB",
      "home": "NE",
      "time": "SUN 4:25 PM",
      "favorite": "NE",
      "pAway": 0.410421,
      "final": false,
      "winner": null,
      "kickoff": "2026-11-08T21:25Z",
      "apiStatus": "underway",
      "apiStatusCheckedAt": "2026-11-08T22:27:03.602395Z",
      "awayScore": 17,
      "homeScore": 7
    },
    {
      "id": "LV-SF",
      "away": "LV",
      "home": "SF",
      "time": "SUN 4:25 PM",
      "favorite": "SF",
      "pAway": 0.201681,
      "final": false,
      "winner": null,
      "kickoff": "2026-11-08T21:25Z",
      "apiStatus": "underway",
      "apiStatusCheckedAt": "2026-11-08T22:27:03.602395Z",
      "awayScore": 7,
      "homeScore": 21
    },
    {
      "id": "ARI-SEA",
      "away": "ARI",
      "home": "SEA",
      "time": "SUN 4:25 PM",
      "favorite": "SEA",
      "pAway": 0.154589,
      "final": false,
      "winner": null,
      "kickoff": "2026-11-08T21:25Z",
      "apiStatus": "underway",
      "apiStatusCheckedAt": "2026-11-08T22:27:03.602395Z",
      "awayScore": 3,
      "homeScore": 7
    },
    {
      "id": "TB-CHI",
      "away": "TB",
      "home": "CHI",
      "time": "SUN 8:20 PM",
      "favorite": "CHI",
      "pAway": 0.299838,
      "final": false,
      "winner": null,
      "kickoff": "2026-11-09T01:20Z",
      "apiStatus": "pre-game",
      "apiStatusCheckedAt": "2026-11-08T22:27:03.602395Z"
    },
    {
      "id": "BUF-MIN",
      "away": "BUF",
      "home": "MIN",
      "time": "MON 8:15 PM",
      "favorite": "BUF",
      "pAway": 0.610674,
      "final": false,
      "winner": null,
      "kickoff": "2026-11-10T01:15Z",
      "apiStatus": "pre-game",
      "apiStatusCheckedAt": "2026-11-08T22:27:03.602395Z"
    }
  ],
  "oddsSource": {
    "url": "https://www.sportsbookreview.com/picks/nfl/week-9-odds-betting-lines-2026/",
    "scheduleUrl": "https://www.nfl.com/schedules/2026/by-week/week-9",
    "retrievedAt": "2026-11-06T01:20:46.922Z",
    "method": "Two-sided bet365 moneylines published by Sportsbook Review, normalized to remove bookmaker margin",
    "moneylines": [
      {
        "id": "JAX-BAL",
        "awayML": -450,
        "homeML": 350
      },
      {
        "id": "CIN-ATL",
        "awayML": -165,
        "homeML": 140
      },
      {
        "id": "DAL-IND",
        "awayML": -265,
        "homeML": 215
      },
      {
        "id": "NYJ-KC",
        "awayML": 390,
        "homeML": -525
      },
      {
        "id": "DET-MIA",
        "awayML": -350,
        "homeML": 275
      },
      {
        "id": "CLE-NO",
        "awayML": 123,
        "homeML": -156
      },
      {
        "id": "NYG-PHI",
        "awayML": -165,
        "homeML": 140
      },
      {
        "id": "LAR-WAS",
        "awayML": -245,
        "homeML": 200
      },
      {
        "id": "DEN-CAR",
        "awayML": -152,
        "homeML": 127
      },
      {
        "id": "HOU-LAC",
        "awayML": -220,
        "homeML": 180
      },
      {
        "id": "GB-NE",
        "awayML": 134,
        "homeML": -159
      },
      {
        "id": "LV-SF",
        "awayML": 375,
        "homeML": -500
      },
      {
        "id": "ARI-SEA",
        "awayML": 525,
        "homeML": -700
      },
      {
        "id": "TB-CHI",
        "awayML": 220,
        "homeML": -270
      },
      {
        "id": "BUF-MIN",
        "awayML": -174,
        "homeML": 147
      }
    ]
  },
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
  }
};
