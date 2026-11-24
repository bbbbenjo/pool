/* Football Pool Simulator — NFL game state.
   This is the frequently updated file: matchups, probabilities, finals, and winners. */

const GAMES_DATA = {
  "games": [
    {
      "id": "IND-HOU",
      "away": "IND",
      "home": "HOU",
      "time": "THU 8:15 PM",
      "kickoff": "2026-11-20T01:15Z",
      "favorite": "HOU",
      "pAway": 0.139398,
      "final": true,
      "winner": "HOU",
      "awayScore": 3,
      "homeScore": 26,
      "apiStatus": "final",
      "apiStatusCheckedAt": "2026-11-20T07:13:12.133171Z"
    },
    {
      "id": "MIA-BUF",
      "away": "MIA",
      "home": "BUF",
      "time": "SUN 1:00 PM",
      "kickoff": "2026-11-22T18:00Z",
      "favorite": "BUF",
      "pAway": 0.096045,
      "final": true,
      "winner": "BUF",
      "apiStatus": "final",
      "apiStatusCheckedAt": "2026-11-22T21:21:04.188687Z",
      "awayScore": 9,
      "homeScore": 26
    },
    {
      "id": "NO-CHI",
      "away": "NO",
      "home": "CHI",
      "time": "SUN 1:00 PM",
      "kickoff": "2026-11-22T18:00Z",
      "favorite": "CHI",
      "pAway": 0.150052,
      "final": true,
      "winner": "CHI",
      "apiStatus": "final",
      "apiStatusCheckedAt": "2026-11-22T21:21:04.188687Z",
      "awayScore": 13,
      "homeScore": 21
    },
    {
      "id": "TEN-DAL",
      "away": "TEN",
      "home": "DAL",
      "time": "SUN 1:00 PM",
      "kickoff": "2026-11-22T18:00Z",
      "favorite": "DAL",
      "pAway": 0.213592,
      "final": true,
      "winner": "DAL",
      "apiStatus": "final",
      "apiStatusCheckedAt": "2026-11-22T21:21:04.188687Z",
      "awayScore": 30,
      "homeScore": 51
    },
    {
      "id": "TB-DET",
      "away": "TB",
      "home": "DET",
      "time": "SUN 1:00 PM",
      "kickoff": "2026-11-22T18:00Z",
      "favorite": "DET",
      "pAway": 0.305344,
      "final": true,
      "winner": "DET",
      "apiStatus": "final",
      "apiStatusCheckedAt": "2026-11-22T21:21:04.188687Z",
      "awayScore": 21,
      "homeScore": 31
    },
    {
      "id": "ARI-KC",
      "away": "ARI",
      "home": "KC",
      "time": "SUN 1:00 PM",
      "kickoff": "2026-11-22T18:00Z",
      "favorite": "KC",
      "pAway": 0.099071,
      "final": true,
      "winner": "KC",
      "apiStatus": "final",
      "apiStatusCheckedAt": "2026-11-22T21:21:04.188687Z",
      "awayScore": 7,
      "homeScore": 34
    },
    {
      "id": "PIT-PHI",
      "away": "PIT",
      "home": "PHI",
      "time": "SUN 1:00 PM",
      "kickoff": "2026-11-22T18:00Z",
      "favorite": "PIT",
      "pAway": 0.656489,
      "final": true,
      "winner": "PHI",
      "apiStatus": "final",
      "apiStatusCheckedAt": "2026-11-22T21:21:04.188687Z",
      "awayScore": 16,
      "homeScore": 19
    },
    {
      "id": "BAL-CAR",
      "away": "BAL",
      "home": "CAR",
      "time": "SUN 1:00 PM",
      "kickoff": "2026-11-22T18:00Z",
      "favorite": "CAR",
      "pAway": 0.43287,
      "final": true,
      "winner": "CAR",
      "apiStatus": "final",
      "apiStatusCheckedAt": "2026-11-22T21:21:04.188687Z",
      "awayScore": 33,
      "homeScore": 35
    },
    {
      "id": "NYJ-LAC",
      "away": "NYJ",
      "home": "LAC",
      "time": "SUN 4:05 PM",
      "kickoff": "2026-11-22T21:05Z",
      "favorite": "LAC",
      "pAway": 0.411011,
      "final": true,
      "winner": "NYJ",
      "apiStatus": "final",
      "apiStatusCheckedAt": "2026-11-22T23:47:29.168728Z",
      "awayScore": 27,
      "homeScore": 24
    },
    {
      "id": "LV-DEN",
      "away": "LV",
      "home": "DEN",
      "time": "SUN 4:25 PM",
      "kickoff": "2026-11-22T21:25Z",
      "favorite": "DEN",
      "pAway": 0.178019,
      "final": true,
      "winner": "DEN",
      "apiStatus": "final",
      "apiStatusCheckedAt": "2026-11-23T00:47:48.324360Z",
      "awayScore": 24,
      "homeScore": 38
    },
    {
      "id": "JAX-NYG",
      "away": "JAX",
      "home": "NYG",
      "time": "SUN 4:25 PM",
      "kickoff": "2026-11-22T21:25Z",
      "favorite": "JAX",
      "pAway": 0.690092,
      "final": true,
      "winner": "NYG",
      "apiStatus": "final",
      "apiStatusCheckedAt": "2026-11-23T00:55:29.040291Z",
      "awayScore": 18,
      "homeScore": 23
    },
    {
      "id": "MIN-SF",
      "away": "MIN",
      "home": "SF",
      "time": "SUN 8:20 PM",
      "kickoff": "2026-11-23T01:20Z",
      "favorite": "SF",
      "pAway": 0.393245,
      "final": true,
      "winner": "SF",
      "apiStatus": "final",
      "apiStatusCheckedAt": "2026-11-23T04:27:37.846577Z",
      "awayScore": 10,
      "homeScore": 35
    },
    {
      "id": "CIN-WAS",
      "away": "CIN",
      "home": "WAS",
      "time": "MON 8:15 PM",
      "kickoff": "2026-11-24T01:15Z",
      "favorite": "CIN",
      "pAway": 0.700162,
      "final": false,
      "winner": null,
      "apiStatus": "underway",
      "apiStatusCheckedAt": "2026-11-24T01:17:41.646246Z",
      "awayScore": 0,
      "homeScore": 0
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
    "url": "https://fanduel.com/research/nfl-odds-week-11-schedule-betting-odds-for-each-game",
    "scheduleUrl": "https://www.nfl.com/schedules/2026/by-week/week-11",
    "retrievedAt": "2026-11-20T01:27:16.087Z",
    "method": "FanDuel two-sided moneylines normalized to remove bookmaker margin.",
    "moneylines": [
      {
        "id": "IND-HOU",
        "awayML": 590,
        "homeML": -850
      },
      {
        "id": "MIA-BUF",
        "awayML": 900,
        "homeML": -1600
      },
      {
        "id": "NO-CHI",
        "awayML": 540,
        "homeML": -770
      },
      {
        "id": "TEN-DAL",
        "awayML": 350,
        "homeML": -450
      },
      {
        "id": "TB-DET",
        "awayML": 215,
        "homeML": -260
      },
      {
        "id": "ARI-KC",
        "awayML": 870,
        "homeML": -1500
      },
      {
        "id": "PIT-PHI",
        "awayML": -215,
        "homeML": 180
      },
      {
        "id": "BAL-CAR",
        "awayML": 122,
        "homeML": -144
      },
      {
        "id": "NYJ-LAC",
        "awayML": 134,
        "homeML": -158
      },
      {
        "id": "LV-DEN",
        "awayML": 440,
        "homeML": -590
      },
      {
        "id": "JAX-NYG",
        "awayML": -255,
        "homeML": 210
      },
      {
        "id": "MIN-SF",
        "awayML": 144,
        "homeML": -172
      },
      {
        "id": "CIN-WAS",
        "awayML": -270,
        "homeML": 220
      }
    ]
  }
};
