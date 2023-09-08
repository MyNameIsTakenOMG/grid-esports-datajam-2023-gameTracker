const { createSlice } = require('@reduxjs/toolkit');

const liveGameDataSlice = createSlice({
  initialState: {
    seriesId: '', // '23457765'
    teams: [
      // team #1
      {
        id: '', // '450'
        name: '', // 'secret'
        score: 0, // 1
        won: null, // true/false
        players: [
          {
            id: '', // '4578857890'
            name: '', // 'puppey'
            character: {
              name: '', // 'lich'
              id: '', // 'lich'
            },
            kills: 0, // 5
            killAssistsGiven: 0, // 3
            deaths: 0, // 1
            objectives: [
              {
                id: '', // 'increaseLevel'
                statePath: [
                  {
                    id: '', // 'increaseLevel'
                  },
                ],
                type: '', // 'increaseLevel'
                completionCount: 0, //34
              },
            ],
            items: [
              {
                id: '', // 'item_wind_lace'
                equipped: null, // true/false
                stashed: null, // true/false
              },
              // other items ...
            ],
          },
        ],
      },
      // team #2 ...
    ],
  },
});
