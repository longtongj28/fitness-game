import React from 'react';
import './css/navbar.css';

function Navbar() {
  return ( 
    <div className="Navbar">
        <div className="leftSide">
            <div className = "links">
                <a href="/discover">Discover</a>
                <a href="/fitstatus">Your FitZone</a>
                <a href="/leaderboard">Leaderboard</a>
                <a href="/rewards">Rewards</a>
            </div>
        </div>
        <div className="rightSide"></div>

        <div className="button">
            <button className="btn">Sign Up</button>
        </div>
     </div>
  );
}

export default Navbar