import React from 'react'
import { useState, useEffect } from 'react'

import './../pages/Home.css'
import { Dropdown,DropdownButton } from 'react-bootstrap'

const Fixtures = () => {

    const [fixtures, setFixtures] = useState([]);
    const [numOfFixtures, setNumOfFixtures] = useState(0);
    const onCreateClick = () =>
    {
        let tempFixtures = [];
        for(var i=0; i<numOfFixtures; i++)
        {
            const index = i;
            tempFixtures.push(
                <div className="fixture">
                    <div style={{marginRight : "10px"}}>
                        <DropdownButton id="dropdown-basic-button" title="Dropdown button">
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </DropdownButton>
                    </div>

                    <div>
                        <DropdownButton id="dropdown-basic-button" title="Dropdown button">
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </DropdownButton>
                    </div>
                </div>
            )
        }

        setFixtures(tempFixtures);
        console.log("created");
    }

    return (
        <div>
           <div className="fixture-container">
                <h3>FIXTURES</h3>
                <div className="fixtures">
                    <input 
                        className="addTeamInputBar" type="number"
                        value={numOfFixtures} onChange={(e) => setNumOfFixtures(e.target.value)}
                        placeholder="Enter number of fixtures">
                    </input>
                    <button className="addButton" onClick={onCreateClick}>Create</button>
                    {fixtures}
                </div>
            </div> 
        </div>
    )
}

export default Fixtures
