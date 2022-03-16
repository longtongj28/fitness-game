import * as React from 'react';
import {Map, Marker} from 'react-map-gl';

import {useCallback, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { getUserLocation, setViewState } from '../actions/types';
import 'mapbox-gl/dist/mapbox-gl.css';

import "./css/map.css"
import ballImg from "../images/bball.png"
import hikeImg from "../images/hiking.png"
import weightImg from "../images/weights.png"
import userIcon from "../images/current_user.png"

const imgs = {"basketball": ballImg, "hiking": hikeImg, "weights": weightImg, "currentUser": userIcon}

const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN; // Set your mapbox token here


const MapView = () => {
  // use selector is selecting from global state
  const mapStyle = useSelector(s => s.viewState.mapStyle)
  const viewState = useSelector(s => s.viewState.viewState)
  const userLocation = useSelector(s => s.locationsState.currentUserLocation)
  const objectives = useSelector(s => s.locationsState.objectives)

  const dispatch = useDispatch();

  // use callback - anonymous function
  const onMove = useCallback(e => {
    dispatch(setViewState(e.viewState))
  }, [dispatch]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(pos => {
      dispatch(getUserLocation(pos.coords.latitude, pos.coords.longitude))
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
          {/* <img src={userIcon} alt="user icon"/>*/}
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
                  >
                    <img className='marker' src={`${imgs[type.type]}`} alt={`${type.type}`}/>

                  </Marker>
                )
              })}
            </React.Fragment>
          )
        })}
      </Map>
    </>
  );
}
export default MapView
