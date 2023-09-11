import { client, fetchSeriesStatesQuery } from '@/apollo/client';

const {
  createSlice,
  createAsyncThunk,
  createSelector,
} = require('@reduxjs/toolkit');

export const fetchStates = createAsyncThunk(
  'series/fetchStates',
  async (seriesId, { rejectWithValue }) => {
    try {
      const response = await client.query({
        query: fetchSeriesStatesQuery,
        variables: { seriesId: seriesId },
      });
      return response.data.series;
    } catch (error) {
      rejectWithValue('Error fetching series');
    }
  }
);

const seriesStatesSlice = createSlice({
  initialState: {
    // id: '', // '2432302'
    // format: '', // 'best-of-3'
    // started: null, // true/false
    // finished: null, // true/false
    // teams: [
    //   // team #1
    //   {
    //     id: '', // '450'
    //     name: '', // 'secret'
    //     score: null, // 1
    //     won: null, // true/false
    //   },
    //   // team #2 ...
    // ],
    // games: [
    //   {
    //     id: '', // 'awfeasdawfersw-awefaweed-waf-waf
    //     sequenceNumber: null, // 1,2,3,4...
    //     map: {
    //       name: '', // 'Defense of the Ancients'
    //     },
    //     started: true,
    //     finished: true,
    //     paused: false,
    //     teams: [
    //       // team #1
    //       {
    //         id: '', // '450'
    //         name: '', // 'secret'
    //         side: '', // 'dire'
    //         won: null, // true/false
    //         kills: 0, // 14,45...
    //         killAssistsGiven: 0, // 28, 17...
    //         deaths: 0, //24, 14...
    //         players: [
    //           {
    //             id: '', // '2345675435323456'
    //             name: '', // 'iNsania
    //             character: {
    //               name: '', // 'lich'
    //               id: '', // 'lich'
    //             },
    //             money: 0, // 4567
    //             inventoryValue: 0, // 5678
    //             netWorth: 0, // money+inventoryValue
    //             kills: 0, // 0
    //             killAssistsGiven: 0, // 0
    //             deaths: 0, // 0
    //             items: [
    //               {
    //                 id: '', // 'item_wind_lace'
    //                 equipped: null, // true/false
    //                 stashed: null, // true/false
    //               },
    //               // other items ...
    //             ],
    //             objectives: [
    //               {
    //                 id: '', // 'increaseLevel' or 'destroyTower'
    //                 statePath: [
    //                   {
    //                     id: '', // 'increaseLevel' or 'destroyTower'
    //                   },
    //                 ],
    //                 type: '', // 'increaseLevel' or 'destroyTower'
    //                 completionCount: null, // 0
    //               },
    //               // other objectives ...
    //             ],
    //           },
    //           // other players...
    //         ],
    //       },
    //       // team #2 ...
    //     ],
    //     draftActions: [
    //       {
    //         id: '', // "draft-action-1"
    //         statePath: [
    //           {
    //             id: '', // "draft-action-1"
    //           },
    //         ],
    //         sequenceNumber: null, // starting with 1
    //         type: '', // ban/pick
    //         drafter: {
    //           id: '', // '450'
    //           type: '', // 'team'
    //         },
    //         draftable: {
    //           id: '', // "leshrac"
    //           type: '', // "character"
    //           name: '', // 'leshrac'
    //         },
    //       },
    //       // other draft actions ...
    //     ],
    //   },
    //   // other games (finished or unfinished) ...
    // ],
    data: null,
    isLoading: false,
    error: null,
  },
  name: 'series',
  reducers: {
    initialize(state, action) {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchStates.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchStates.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchStates.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default seriesStatesSlice.reducer;
export const { initialize } = seriesStatesSlice.actions;

// selectors
export const seriesStates = createSelector(
  (state) => state.series,
  (series) => series.data
);
