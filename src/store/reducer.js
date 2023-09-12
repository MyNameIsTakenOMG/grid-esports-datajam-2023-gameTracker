import { combineReducers } from '@reduxjs/toolkit';
import entitiesReducer from './combineReducers';

export default combineReducers({
  entities: entitiesReducer,
});
