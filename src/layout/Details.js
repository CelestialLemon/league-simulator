import React from 'react'

import './Details.css'
import { useState, useEffect } from 'react'

const Details = ({onDetailsChange}) => {

    const [pointsPerWin, setPointsPerWin] = useState(null);
    const [pointsPerLoss, setPointsPerLoss] = useState(null);
    const [pointsPerNR, setPointsPerNR] = useState(null);

    useEffect(() => 
    {
        const details = {
            "pointsPerWin" : pointsPerWin,
            "pointsPerLoss" : pointsPerLoss,
            "pointsPerNR" : pointsPerNR
        }

        onDetailsChange(details);
    }, [pointsPerWin, pointsPerLoss, pointsPerNR])

    return (
        <div className="details-container">
            <h3>DETAILS</h3>
               <h3 style={{fontSize : "20px"}}>Points</h3>
                <div>
                    <input type="number" placeholder="Points for win" onChange={e => setPointsPerWin(e.target.value)}></input>
                    <input type="number" placeholder="Points for loss" onChange={e => setPointsPerLoss(e.target.value)}></input>
                    <input type="number" placeholder="Points for N/R" onChange={e => setPointsPerNR(e.target.value)}></input>
                </div>

            
        </div>
    )
}

export default Details
