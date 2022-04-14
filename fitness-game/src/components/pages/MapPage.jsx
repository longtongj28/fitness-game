import * as React from 'react'
import ObjectiveMap from '../ObjectiveMap'
import Sidebar from '../Sidebar'
import Navbar from '../Navbar'
import { useRef } from 'react'


const MapPage = () => {
    const mapRef = useRef()
    return (
        <>
        <div className="page">
            <Navbar/>
            <ObjectiveMap mapRef={mapRef}/>
            <Sidebar mapRef={mapRef}/>
        </div>
        </>
    )
}

export default MapPage