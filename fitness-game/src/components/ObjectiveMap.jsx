import * as React from 'react';
import {Map, Marker} from 'react-map-gl';

import {useCallback, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { GET_USER_LOCATION, SET_VIEW_STATE } from '../actions/types';
import 'mapbox-gl/dist/mapbox-gl.css';

import userIcon from "../images/current_user.png"

const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN; // Set your mapbox token here


const MapView = () => {
  // use selector is selecting from global state
  const mapStyle = useSelector(s => s.viewState.mapStyle);
  const viewState = useSelector(s => s.viewState.viewState);
  const userLocation = useSelector(s => s.locationsState.currentUserLocation)
  const dispatch = useDispatch();

  // use callback - anonymous function
  const onMove = useCallback(e => {
    dispatch({type: SET_VIEW_STATE, payload: e.viewState});
  }, [dispatch]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(pos => {
      dispatch({type: GET_USER_LOCATION, payload: {
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude
      }})
    });
  }, []);

  return (
    <>
      <Map
        {...viewState}
        onMove={onMove}
        style={{width: '100vw', height: '100vh'}}
        mapStyle={mapStyle}
        mapboxAccessToken={MAPBOX_TOKEN}
      >
        <Marker
        longitude={userLocation.longitude}
        latitude={userLocation.latitude}
        anchor="bottom"
        >
          {/* <img src={userIcon} alt="user icon"/> */}
        </Marker>
      </Map>
    </>
  );
}
export default MapView
