import * as React from 'react'
import ObjectiveMap from '../ObjectiveMap'
import Sidebar from '../Sidebar'
import Navbar from '../Navbar'


const MapPage = () => {
    return (
        <>
        <div className="page">
            <Navbar/>
            <ObjectiveMap/>
            <Sidebar/>
        </div>
        </>
    )
}

export default MapPage