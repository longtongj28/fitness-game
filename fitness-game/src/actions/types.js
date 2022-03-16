export const SET_VIEW_STATE = 'SET_VIEW_STATE'
export const setViewState = (viewState) => ({
    type: SET_VIEW_STATE,
    payload: {viewState}
})
export const CHANGE_ACTIVITY = 'CHANGE_ACTIVITY'
export const GET_USER_LOCATION = 'GET_USER_LOCATION'
export const getUserLocation = (lat, lon) => ({
    type: GET_USER_LOCATION,
    payload: {latitude: lat, longitude: lon}
})
