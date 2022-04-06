import React, {useState} from 'react';
import './css/navbar.css';
import {Route, BrowserRouter, NavLink as Router} from 
"react-router-dom";
/*import ReorderIcon from '@material-ui/icons/Reorder';*/

function Navbar() {

    const [showLinks, setShowLinks ] = useState(false);  
    return ( 
    
    <div className="Navbar">
        <div className="leftSide">
            <div className = "links" id={showLinks ? "hidden" : ""}>
                <a href="/discover">Discover</a>
                <a href="/zone">Your Zone</a>
                <a href="/ranks">Ranking</a>
                <a href="/rewards">Rewards</a>
                
            </div>
            <button onClick={() => setShowLinks(!showLinks)}> 
            {""}
            </button>
        </div>
        <div className="rightSide"></div>

        <div className="button">
            <button className="btn">Sign Up</button>
        </div>
     </div>
  );
}

export default Navbar

