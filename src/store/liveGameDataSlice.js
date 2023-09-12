import { client, fetchTeamInfoQuery } from '@/apollo/client';

const {
  createSlice,
  createAsyncThunk,
  createSelector,
} = require('@reduxjs/toolkit');

export const fetchTeamInfo = createAsyncThunk(
  'liveData/fetchTeamInfo',
  async (seriesId, { rejectWithValue }) => {
    try {
      const response = await client.query({
        query: fetchTeamInfoQuery,
        variables: { seriesId: seriesId },
      });
      return response.data.series;
    } catch (error) {
      rejectWithValue('Error fetching data');
    }
  }
);

const liveGameDataSlice = createSlice({
  initialState: {
    // eventsLogs: [],
    // id: '', // 'awfeasdawfersw-awefaweed-waf-waf
    // sequenceNumber: null, // 1,2,3,4...
    // map: {
    //   name: '', // 'Defense of the Ancients'
    // },
    // started: true,
    // finished: true,
    // paused: false,
    // teams: [
    //   // team #1
    //   {
    //     id: '', // '450'
    //     name: '', // 'secret'
    //     side: '', // 'dire'
    //     won: null, // true/false
    //     kills: null, // 14,45...
    //     killAssistsGiven: null, // 28, 17...
    //     deaths: null, //24, 14...
    //     players: [
    //       {
    //         id: '', // '2345675435323456'
    //         name: '', // 'iNsania
    //         character: {
    //           name: '', // 'lich'
    //           id: '', // 'lich'
    //         },
    //         money: null, // 4567
    //         inventoryValue: null, // 5678
    //         netWorth: null, // money+inventoryValue
    //         kills: null, // 0
    //         killAssistsGiven: null, // 0
    //         deaths: null, // 0
    //         items: [
    //           {
    //             id: '', // 'item_wind_lace'
    //             equipped: null, // true/false
    //             stashed: null, // true/false
    //           },
    //           // other items ...
    //         ],
    //         objectives: [
    //           {
    //             id: '', // 'increaseLevel' or 'destroyTower'
    //             statePath: [
    //               {
    //                 id: '', // 'increaseLevel' or 'destroyTower'
    //               },
    //             ],
    //             type: '', // 'increaseLevel' or 'destroyTower'
    //             completionCount: null, // 0
    //           },
    //           // other objectives ...
    //         ],
    //       },
    //       // other players...
    //     ],
    //   },
    //   // team #2 ...
    // ],
    // draftActions: [
    //   {
    //     id: '', // "draft-action-1"
    //     statePath: [
    //       {
    //         id: '', // "draft-action-1"
    //       },
    //     ],
    //     sequenceNumber: null, // starting with 1
    //     type: '', // ban/pick
    //     drafter: {
    //       id: '', // '450'
    //       type: '', // 'team'
    //       name: '', // team name
    //     },
    //     draftable: {
    //       id: '', // "leshrac"
    //       type: '', // "character"
    //       name: '', // 'leshrac'
    //     },
    //   },
    //   // other draft actions ...
    // ],
    data: {
      eventsLogs: [],
      teams: [],
      draftActions: [],
    },
    isLoading: true,
    error: null,
  },
  name: 'liveData',
  reducers: {
    messageReceived(state, action) {
      state.data.eventsLogs.push(action.payload.log);

      if (action.payload.eventType.match(/(banned|picked)/)) {
        state.data.draftActions.push(action.payload.draftAction);
      } else if (
        action.payload.eventType.match(
          /acquired|equipped|unequipped|stashed|unstashed/
        )
      ) {
        // find the player
        let teamIndex = state.data.teams.findIndex(
          (team) => team.id === action.payload.itemAction.teamId
        );
        let playerIndex = state.data.teams[teamIndex].players.findIndex(
          (player) => player.id === action.payload.itemAction.id
        );

        let type = action.payload.itemAction.type;

        if (type === 'acquired') {
          if (!state.data.teams[teamIndex].players[playerIndex].items) {
            state.data.teams[teamIndex].players[playerIndex].items = [];
          }
          state.data.teams[teamIndex].players[playerIndex].items.push(
            action.payload.itemAction.item
          );
        } else if (type === 'equipped' || type === 'stashed') {
          let itemIndex = state.data.teams[teamIndex].players[
            playerIndex
          ].items.findIndex(
            (item) => item.id === action.payload.itemAction.item.id
          );
          state.data.teams[teamIndex].players[playerIndex].items[itemIndex][
            type
          ] = true;
        } else {
          let itemIndex = state.data.teams[teamIndex].players[
            playerIndex
          ].items.findIndex(
            (item) => item.id === action.payload.itemAction.item.id
          );
          if (type === 'unequipped') {
            state.data.teams[teamIndex].players[playerIndex].items[
              itemIndex
            ].equipped = false;
          } else
            state.data.teams[teamIndex].players[playerIndex].items[
              itemIndex
            ].stashed = false;
        }
      } else if (action.payload.eventType.match(/lost-item/)) {
        // find the player
        let teamIndex = state.data.teams.findIndex(
          (team) => team.id === action.payload.itemAction.teamId
        );
        let playerIndex = state.data.teams[teamIndex].players.findIndex(
          (player) => player.id === action.payload.itemAction.id
        );

        state.data.teams[teamIndex].players[playerIndex].items =
          state.data.teams[teamIndex].players[playerIndex].items.filter(
            (item) => item.id !== action.payload.itemAction.item.id
          );
      } else if (action.payload.eventType.match(/game-set-clock/)) {
        state.data.teams = action.payload.teams;
      } else if (action.payload.eventType.match(/increaseLevel/)) {
        // find the player
        let teamIndex = state.data.teams.findIndex(
          (team) => team.id === action.payload.player.teamId
        );
        let playerIndex = state.data.teams[teamIndex].players.findIndex(
          (player) => player.id === action.payload.player.id
        );

        if (!state.data.teams[teamIndex].players[playerIndex].objectives) {
          state.data.teams[teamIndex].players[playerIndex].objectives = [];
          state.data.teams[teamIndex].players[playerIndex].objectives.push(
            action.payload.player.objective
          );
        } else
          state.data.teams[teamIndex].players[playerIndex].objectives[0]
            .completionCount++;
      } else if (action.payload.eventType.match(/player-killed-player/)) {
        // find the actor
        let teamIndex = state.data.teams.findIndex(
          (team) => team.id === action.payload.player.actor.teamId
        );
        let playerIndex = state.data.teams[teamIndex].players.findIndex(
          (player) => player.id === action.payload.player.actor.id
        );
        // update the actor
        if (state.data.teams[teamIndex].players[playerIndex].kills === null)
          state.data.teams[teamIndex].players[playerIndex].kills = 1;
        else state.data.teams[teamIndex].players[playerIndex].kills++;
        // update the assists
        action.payload.player.actor.assists.map((assist) => {
          state.data.teams[teamIndex].players.map((player) => {
            if (player.id === assist) {
              if (!player.killAssistsGiven) player.killAssistsGiven = 1;
              else player.killAssistsGiven++;
            }
          });
        });
        // update the target
        teamIndex = state.data.teams.findIndex(
          (team) => team.id === action.payload.player.target.teamId
        );
        playerIndex = state.data.teams[teamIndex].players.findIndex(
          (player) => player.id === action.payload.player.target.id
        );
        if (!state.data.teams[teamIndex].players[playerIndex].deaths)
          state.data.teams[teamIndex].players[playerIndex].deaths = 1;
        else state.data.teams[teamIndex].players[playerIndex].deaths++;
      } else if (action.payload.eventType.match(/team-killed-player/)) {
        //update the team
        let teamIndex = state.data.teams.findIndex(
          (team) => team.id === action.payload.teamId
        );
        state.data.teams[teamIndex].players.map((player) => {
          if (!player.killAssistsGiven) player.killAssistsGiven = 1;
          else player.killAssistsGiven++;
        });
        //update the target
        teamIndex = state.data.teams.findIndex(
          (team) => team.id === action.payload.target.teamId
        );
        let playerIndex = state.data.teams[teamIndex].players.findIndex(
          (player) => player.id === action.payload.target.id
        );
        if (!state.data.teams[teamIndex].players[playerIndex].deaths)
          state.data.teams[teamIndex].players[playerIndex].deaths = 1;
        else state.data.teams[teamIndex].players[playerIndex].deaths++;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTeamInfo.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchTeamInfo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data.teams = action.payload.teams;
      })
      .addCase(fetchTeamInfo.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default liveGameDataSlice.reducer;
export const { messageReceived } = liveGameDataSlice.actions;

// selectors
export const liveGameData = createSelector(
  (state) => state.entities.liveData,
  (liveData) => liveData.data
);
export const liveGameLoading = createSelector(
  (state) => state.entities.liveData,
  (liveData) => liveData.isLoading
);
export const liveGameError = createSelector(
  (state) => state.entities.liveData,
  (liveData) => liveData.error
);
