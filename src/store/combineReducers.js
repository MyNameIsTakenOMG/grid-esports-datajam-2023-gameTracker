import { combineReducers } from '@reduxjs/toolkit';
import seriesReducer from './seriesStatesSlice';
import liveDataReducer from './liveGameDataSlice';

export default combineReducers({
  seriesStates: seriesReducer,
  liveData: liveDataReducer,
});
