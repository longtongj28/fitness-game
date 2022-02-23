import * as React from 'react'
import ObjectiveMap from '../ObjectiveMap'
import Sidebar from '../Sidebar'


const MapPage = () => {
    return (
        <>
        <div className="page">
            <ObjectiveMap/>
            <Sidebar/>
        </div>
        </>
    )
}

export default MapPage