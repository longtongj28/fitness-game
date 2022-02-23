import { combineReducers } from 'redux';
import {viewState, activityState} from './clientReducer';

export default combineReducers({
  viewState,
  activityState
});