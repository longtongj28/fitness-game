import { combineReducers } from 'redux';
import {viewState, activityState, locationsState} from './clientReducer';

export default combineReducers({
  viewState,
  activityState,
  locationsState,
  
});