import { SET_VIEW_STATE } from '../actions/types';

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