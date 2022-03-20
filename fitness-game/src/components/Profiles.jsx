import * as React from 'react';

const Profiles = () => {
    return (
        <div id="profile">
            {Item()}
        </div>
    );
}

function Item(data) {
    return (
        <>
            {
                //data.map((value,index) => {
                    <div className="flex">
                        <div className="item">
                             <div className="info">
                                <h3 className="name text-dark">Name</h3>
                                 <span>Location</span>
                            </div>
                        </div>
                        <div className="item">
                            <span>Score</span>
                        </div>
                    </div>  
                //})
            }
        </>

        
    )
}

export default Profiles