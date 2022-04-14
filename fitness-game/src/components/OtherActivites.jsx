import React from 'react';
import { useCallback, useRef } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { changeActivity, setViewState } from '../actions/types';
import './css/sidebar.css'

const OtherActivities = ({mapRef}) => {
    const objectives = useSelector(s => s.locationsState.objectives)
    const dispatch = useDispatch()

    const onSelectMarker = useCallback(({longitude, latitude}) => {
        mapRef.current?.flyTo({center: [longitude, latitude], zoom:14});
      }, []);

    const onClickNearbyAct = (actInfo) => {
        var lat = actInfo.latitude
        var long = actInfo.longitude
        onSelectMarker(actInfo)
        // dispatch(setViewState({latitude: lat, longitude: long, zoom: 14}))
        dispatch(changeActivity(actInfo))
    }

    
    return (
        <>
            <div>
                <h2>Discover objectives</h2>
                {objectives.map((o, i) => {
                    return (
                        <div key={i}>
                            <p>
                            {o.type}
                            </p>
                            <div>
                                {o.list.map((act, j) => {
                                    return(
                                        <div className="nearbyActBtn" 
                                        onClick={()=> {onClickNearbyAct(act)}}
                                        >
                                              {act.name}
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
     );
}
 
export default OtherActivities;