const { createSlice } = require('@reduxjs/toolkit');

const seriesStatesSlice = createSlice({
  initialState: {
    seriesId: '', // '2432302'
    format: '', // 'best-of-3'
    started: null, // true/false
    finished: null, // true/false
    teams: [
      // team #1
      {
        id: '', // '450'
        name: '', // 'secret'
        score: null, // 1
        won: null, // true/false
      },
      // team #2 ...
    ],
    games: [
      {
        id: '', // 'awfeasdawfersw-awefaweed-waf-waf
        sequenceNumber: null, // 1,2,3,4...
        map: {
          name: '', // 'Defense of the Ancients'
        },
        started: true,
        finished: true,
        paused: false,
        teams: [
          // team #1
          {
            id: '', // '450'
            name: '', // 'secret'
            side: '', // 'dire'
            won: null, // true/false
            kills: null, // 14,45...
            killAssistsGiven: null, // 28, 17...
            deaths: null, //24, 14...
            players: [
              {
                id: '', // '2345675435323456'
                name: '', // 'iNsania
                character: {
                  name: '', // 'lich'
                  id: '', // 'lich'
                },
                money: null, // 4567
                inventoryValue: null, // 5678
                netWorth: null, // money+inventoryValue
                kills: null, // 0
                killAssistsGiven: null, // 0
                deaths: null, // 0
                items: [
                  {
                    id: '', // 'item_wind_lace'
                    equipped: null, // true/false
                    stashed: null, // true/false
                  },
                  // other items ...
                ],
                objectives: [
                  {
                    id: '', // 'increaseLevel' or 'destroyTower'
                    statePath: [
                      {
                        id: '', // 'increaseLevel' or 'destroyTower'
                      },
                    ],
                    type: '', // 'increaseLevel' or 'destroyTower'
                    completionCount: null, // 0
                  },
                  // other objectives ...
                ],
              },
              // other players...
            ],
          },
          // team #2 ...
        ],
      },
      // other games (finished or unfinished) ...
    ],
  },
});
