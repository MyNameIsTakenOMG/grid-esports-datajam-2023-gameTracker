import { configureStore } from '@reduxjs/toolkit';
import seriesReducer from './seriesStatesSlice';

export default configureStore({
  reducer: {
    series: seriesReducer,
  },
});
