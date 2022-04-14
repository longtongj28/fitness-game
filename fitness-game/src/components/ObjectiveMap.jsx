import * as React from 'react';
import {Map, Marker, MapRef} from 'react-map-gl';

import {useCallback, useEffect, useRef} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { changeActivity, getUserLocation, setViewState } from '../actions/types';
import 'mapbox-gl/dist/mapbox-gl.css';

import "./css/map.css"
import ballImg from "../images/bball.png"
import hikeImg from "../images/hiking.png"
import weightImg from "../images/weights.png"
import userIcon from "../images/current_user.png"
import { useState } from 'react';
const imgs = {"basketball": ballImg, "hiking": hikeImg, "weights": weightImg, "currentUser": userIcon}

const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN; // Set your mapbox token here


const MapView = ({mapRef}) => {
  // use selector is selecting from global state
  const mapStyle = useSelector(s => s.viewState.mapStyle)
  const cssStyle = useSelector(s => s.viewState.style)
  const viewState = useSelector(s => s.viewState.viewState)
  const userLocation = useSelector(s => s.locationsState.currentUserLocation)
  const objectives = useSelector(s => s.locationsState.objectives)
  const dispatch = useDispatch()
  
  const onSelectMarker = useCallback(({longitude, latitude}) => {
    mapRef.current?.flyTo({center: [longitude, latitude],  zoom: 14});
  }, []);

  
  // use callback - anonymous function
  const onMove = useCallback(e => {
    dispatch(setViewState(e.viewState))
  }, [dispatch]);

  
  const onClickMarker = (act) => {
    onSelectMarker(act)
    dispatch(changeActivity(act))
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(pos => {
      dispatch(getUserLocation(pos.coords.latitude, pos.coords.longitude))
    });
  }, []);

  return (
    <>
    <div className={cssStyle}>
        <Map
          viewState={viewState}
          onMove={onMove}
          style={{width: '100%', height: '100%'}}
          mapStyle={mapStyle}
          mapboxAccessToken={MAPBOX_TOKEN}
          ref={mapRef}
        >
          <Marker
          longitude={userLocation.longitude}
          latitude={userLocation.latitude}
          anchor="bottom"
          onClick={() => {onSelectMarker({latitude:userLocation.latitude, longitude: userLocation.longitude})}}
          style={{"cursor":"pointer"}}
          >
            <img className='marker currentUser' src={userIcon} alt="user icon"/>
          </Marker>
          {objectives.map((type, i) => {
            return(
              <React.Fragment key={`act-${i}`}>
                {type.list.map((act, j) => {
                  return(
                    <Marker
                      key={`marker-${j}`}
                      latitude={act.latitude}
                      longitude={act.longitude}
                      onClick={() => {onClickMarker(act)}}
                      style={{"cursor":"pointer"}}
                    >
                      <img className='marker' src={`${imgs[type.type]}`} alt={`${type.type}`}/>
                    </Marker>
                  )
                })}
              </React.Fragment>
            )
          })}
        </Map>
      </div>
    </>
  );
}
export default MapView
