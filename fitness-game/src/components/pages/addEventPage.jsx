import * as React from 'react'
import ObjectiveMap from '../ObjectiveMap'
import Sidebar from '../Sidebar'
import Navbar from '../Navbar'
import { useRef } from 'react'


const AddEvtPage = () => {
    return (
        <>
        <div className="page">
            <Navbar/>
            <form action="/action_page.php">
            <label for="fname">First name:</label><br/>
            <input type="text" id="fname" name="fname" value="John"/><br/>
            <label for="lname">Last name:</label><br/>
            <input type="text" id="lname" name="lname" value="Doe"/><br/><br/>
            <input type="submit" value="Submit"/>
            </form> 
        </div>
        </>
    )
}

export default AddEvtPage