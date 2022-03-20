import { combineReducers } from 'redux';
import {viewState, activityState, leaderboardState} from './clientReducer';

export default combineReducers({
  viewState,
  activityState,
  leaderboardState
});