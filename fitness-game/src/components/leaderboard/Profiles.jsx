import * as React from 'react';

const Profiles = ({LeaderboardDB}) => {
    return (
        <div id="profile">
            {Item(LeaderboardDB)}
        </div>
    );
}

function Item(data) {
    return (
        <>
            {
                data.map((value, index) => (
                    <div className="flex" key={index}>
                        <div className="item">
                            <img src={value.img} alt="" />

                            <div className="info">    
                                <h3 className="name text-dark">{value.name}</h3>
                                 <span>{value.location}</span>
                            </div>
                        </div>
                        <div className="item">
                            <span>{value.score}</span>
                        </div>
                    </div>  
                    )
                )
            }
        </>
        
    )
}

export default Profiles