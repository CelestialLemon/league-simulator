import React from 'react'
import { useState, useEffect } from 'react'

import './Fixtures.css'
import Slider from '../components/Slider'
import { Dropdown,DropdownButton } from 'react-bootstrap'

const Fixtures = ({teams, onFixturesChange}) => {

    const [fixturesJSX, setFixturesJSX] = useState([]);
    const [numOfFixtures, setNumOfFixtures] = useState(0);
    const [fixturesData, setFixturesData] = useState([]);
    const [updateState, setUpdateState] = useState(0);
    const onCreateClick = () =>
    {
        let tempFixtures = [];

        
        for(var i=0; i<numOfFixtures; i++)
        {
            const index = i;
            tempFixtures.push(
                <div className="fixture" key={index}>
                    
                    <select class="form-select" className="team1-select" onChange={e => {
                        const temp = fixturesData;
                        temp[index].team1 = e.target.value;
                        setFixturesData(temp);
                        onFixturesChange(temp);
                    }}>
                        <option selected>Team 1</option>
                        {
                            teams.map(team => 
                            <option>{team}</option>)
                        }
                    </select>

                    <select class="form-select" className="team2-select" onChange={e => {
                        const temp = fixturesData;
                        temp[index].team2 = e.target.value;
                        setFixturesData(temp);
                        onFixturesChange(temp);
                    }}>
                        <option selected>Team 1</option>
                        {
                            teams.map(team => 
                            <option>{team}</option>)
                        }
                    </select>
                    <Slider sliderWidth={300} onChange={changedValue => 
                    {
                        const temp = fixturesData;
                        temp[index].team1WinPercent = parseInt(changedValue);
                        setFixturesData(temp);
                        onFixturesChange(temp);
                    }}></Slider>
                </div>
            )
        }

        setFixturesJSX(tempFixtures);
        console.log("created");
    }

    const InitFixturesData = () =>
    {
        const temp = [];
        for(var i=0; i<numOfFixtures; i++)
        {
            temp.push({
                "team1" : "team1",
                "team2" : "team2",
                "team1WinPercent" : 50
            });
        }

        setFixturesData(temp);
        onFixturesChange(temp);
    }

    useEffect(() =>
    {
        InitFixturesData();
    },[numOfFixtures])

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
                    {fixturesJSX}
                </div>
            </div>
        </div>
    )
}

export default Fixtures
