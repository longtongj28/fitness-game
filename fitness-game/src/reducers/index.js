import { combineReducers } from 'redux';
import {viewState, activityState, locationsState, leaderboardState} from './clientReducer';

export default combineReducers({
  viewState,
  activityState,
  locationsState,
  leaderboardState
});