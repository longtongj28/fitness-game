import { CHANGE_STYLE, SET_VIEW_STATE, CHANGE_ACTIVITY, GET_USER_LOCATION } from '../actions/types';
import { generateActivity } from '../util/generateData';


const defaultMapState = {
  mapStyle: 'mapbox://styles/mapbox/streets-v11',
  style: 'map-side-open',
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
    case CHANGE_STYLE:
      return{...state, style: payload, viewState:{...state.viewState}}
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

const activityInfo = {
  name: "Objective 1",
  distance: 2,
  description: "This is a description of objective 1",
  minTime: 60,
  participants: 50,
  location: "1234 Fullerton Ave, Fullerton, 54321"
}
const activityInfo = {
  actInfo: generateActivity(),
  activitySelected: false
}
export const activityState = (state=activityInfo, action) => {
  const { type, payload } = action

  switch(type){
    case CHANGE_ACTIVITY:
      return {activitySelected: true, actInfo: payload}
    default:
      return state
  }
}

// const userInterface = {
//   style: 'map-side-open'
// }

// export const userInterfaceState = (state=userInterface, action))