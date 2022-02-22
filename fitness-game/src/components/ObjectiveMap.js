import * as React from 'react';
import {Map} from 'react-map-gl';

import {useCallback} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { SET_VIEW_STATE } from '../actions/types';
import 'mapbox-gl/dist/mapbox-gl.css';

const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN; // Set your mapbox token here


export default function MapView() {
  const mapStyle = useSelector(s => s.viewState.mapStyle);
  const viewState = useSelector(s => s.viewState.viewState);
  const dispatch = useDispatch();

  const onMove = useCallback(e => {
    dispatch({type: SET_VIEW_STATE, payload: e.viewState});
  }, [dispatch]);

  return (
    <Map
      {...viewState}
      onMove={onMove}
      style={{width: '100vw', height: '100vh'}}
      mapStyle={mapStyle}
      mapboxAccessToken={MAPBOX_TOKEN}
    />
  );
}
