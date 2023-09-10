const { createSlice } = require('@reduxjs/toolkit');

const liveGameDataSlice = createSlice({
  initialState: {
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
    draftActions: [
      {
        id: '', // "draft-action-1"
        statePath: [
          {
            id: '', // "draft-action-1"
          },
        ],
        sequenceNumber: null, // starting with 1
        type: '', // ban/pick
        drafter: {
          id: '', // '450'
          type: '', // 'team'
        },
        draftable: {
          id: '', // "leshrac"
          type: '', // "character"
          name: '', // 'leshrac'
        },
      },
      // other draft actions ...
    ],
  },
});
