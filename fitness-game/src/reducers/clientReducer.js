import { SET_VIEW_STATE, CHANGE_ACTIVITY, GET_USER_LOCATION } from '../actions/types';
import { generateActivity } from '../util/generateData';


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

    case GET_USER_LOCATION:
      return {...state, 
              viewState: {
                ...state.viewState,
                latitude: payload.latitude,
                longitude: payload.longitude}
              }
    default:
      return state
  }
}

// want image of the icon, longitude, and latitude of markers
const locations = {
  currentUserLocation: {image: null, latitude: 0, longitude: 0},
  objectives: [
    {type: "basketball", list: []},
    {type: "hiking", list: []},
    {type: "weights", list: []},
  ]
}
for (let type of locations.objectives) {
  for (let i = 0; i < 5; i++) {
    type.list.push(generateActivity())
  }
}

export const locationsState = (state=locations, action) => {
  const { type, payload } = action

  switch (type) {

    case GET_USER_LOCATION:
      let copy = {...state,
        currentUserLocation: {
          latitude: payload.latitude,
          longitude: payload.longitude}
        }
      
      return copy
    default:
      return state
  }
}
const activityInfo = generateActivity()
export const activityState = (state=activityInfo, action) => {
  const { type, payload } = action

  switch(type){
    case CHANGE_ACTIVITY:
      return payload
    default:
      return state
  }
}