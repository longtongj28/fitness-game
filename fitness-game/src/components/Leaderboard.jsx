import * as React from 'react';
import Profiles from './Profiles';

const Leaderboard = () => {
    
    const handleClick = (e) => {
        console.log(e.target)
    }
    return (
        <>
        <div className="leaderboard">
            <h1 className="board"> Leaderboard </h1>
            
            <div className="duration">
                <button onClick={handleClick} data-id='7'>7 Days</button>
                <button onClick={handleClick} data-id='30'>30 Days</button>
                <button onClick={handleClick} data-id='0'>All-Time</button>
            </div>
        
            <Profiles></Profiles>

        </div>
        </>
    );
}

export default Leaderboard