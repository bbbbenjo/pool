/* Football Pool Simulator — NFL game state.
   This is the frequently updated file: matchups, probabilities, finals, and winners. */

const GAMES_DATA = {
  "games": [
    {
      "id": "PIT-CLE",
      "away": "PIT",
      "home": "CLE",
      "time": "THU 8:15 PM",
      "favorite": "PIT",
      "pAway": 0.612,
      "final": true,
      "winner": "CLE"
    },
    {
      "id": "IND-WAS",
      "away": "IND",
      "home": "WAS",
      "time": "SUN 9:30 AM",
      "favorite": "IND",
      "pAway": 0.6409
    },
    {
      "id": "BUF-NE",
      "away": "NE",
      "home": "BUF",
      "time": "SUN 1:00 PM",
      "favorite": "BUF",
      "pAway": 0.2638
    },
    {
      "id": "CHI-NYJ",
      "away": "NYJ",
      "home": "CHI",
      "time": "SUN 1:00 PM",
      "favorite": "CHI",
      "pAway": 0.3721
    },
    {
      "id": "CIN-JAX",
      "away": "JAX",
      "home": "CIN",
      "time": "SUN 1:00 PM",
      "favorite": "CIN",
      "pAway": 0.438
    },
    {
      "id": "ARI-NYG",
      "away": "ARI",
      "home": "NYG",
      "time": "SUN 1:00 PM",
      "favorite": "ARI",
      "pAway": 0.562
    },
    {
      "id": "LAR-PHI",
      "away": "LAR",
      "home": "PHI",
      "time": "SUN 1:00 PM",
      "favorite": "LAR",
      "pAway": 0.6115
    },
    {
      "id": "GB-TB",
      "away": "GB",
      "home": "TB",
      "time": "SUN 1:00 PM",
      "favorite": "GB",
      "pAway": 0.6279
    },
    {
      "id": "BAL-TEN",
      "away": "TEN",
      "home": "BAL",
      "time": "SUN 1:00 PM",
      "favorite": "BAL",
      "pAway": 0.1616
    },
    {
      "id": "HOU-DAL",
      "away": "DAL",
      "home": "HOU",
      "time": "SUN 1:00 PM",
      "favorite": "HOU",
      "pAway": 0.4037
    },
    {
      "id": "MIN-MIA",
      "away": "MIA",
      "home": "MIN",
      "time": "SUN 4:05 PM",
      "favorite": "MIN",
      "pAway": 0.1732
    },
    {
      "id": "KC-LV",
      "away": "KC",
      "home": "LV",
      "time": "SUN 4:25 PM",
      "favorite": "KC",
      "pAway": 0.6548
    },
    {
      "id": "SF-DEN",
      "away": "DEN",
      "home": "SF",
      "time": "SUN 4:25 PM",
      "favorite": "SF",
      "pAway": 0.4289
    },
    {
      "id": "SEA-LAC",
      "away": "LAC",
      "home": "SEA",
      "time": "SUN 4:25 PM",
      "favorite": "SEA",
      "pAway": 0.2534
    },
    {
      "id": "DET-CAR",
      "away": "DET",
      "home": "CAR",
      "time": "SUN 8:20 PM",
      "favorite": "DET",
      "pAway": 0.6345
    },
    {
      "id": "NO-ATL",
      "away": "ATL",
      "home": "NO",
      "time": "MON 8:15 PM",
      "favorite": "NO",
      "pAway": 0.438
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
  }
};
