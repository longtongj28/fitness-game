import * as React from 'react';
import { useSelector } from 'react-redux';
import OtherActivities from './OtherActivites';

// Info should be pulled from global state.
// When the user clicks on one of the markers, it should update the state with an object
// that contains that information
const Information = () => {
    // current user selection in the global state, if it's empty,
    // the screen should show something else other than this.
    const activityInfo = useSelector(s => s.activityState)
    return ( 
        <>
        <div className='InformationSidebox'>
            <h1>
                {activityInfo.name}
            </h1>
            <h2>
                Location
            </h2>
            <p>
                {activityInfo.location}
            </p>
            <h2>
                Distance Away
            </h2>
            <p>
                {activityInfo.distance} miles
            </p>
            <h2>
                Participants
            </h2>
            <p>
                {activityInfo.participants}
            </p>
            <h2>
                Minimum Time
            </h2>
            <p>
                {activityInfo.minTime} minutes
            </p>
            <h2>
                Description
            </h2>
            <p>
                {activityInfo.description}
            </p>
            <button>Start</button>
            <OtherActivities/>
        </div>
        </>
     );
}
 
export default Information