import { SET_VIEW_STATE, CHANGE_ACTIVITY } from '../actions/types';

const defaultMapState = {
  mapStyle: 'mapbox://styles/mapbox/streets-v11',
  viewState: {
    latitude: 37.8,
    longitude: -122.4,
    zoom: 14
  }
}

export const viewState = (state=defaultMapState, action) => {
  const { type, payload } = action

  switch (type) {
    case SET_VIEW_STATE:
      return {...state, viewState: payload}
    default:
      return state
  }
}

const activityInfo = {
  name: "Objective 1",
  distance: 2,
  description: "This is a description of objective 1",
  minTime: 60,
  participants: 50,
  location: "1234 Fullerton Ave, Fullerton, 54321"
}
export const activityState = (state=activityInfo, action) => {
  const { type, payload } = action

  switch(type){
    case CHANGE_ACTIVITY:
      return payload
    default:
      return state
  }
}