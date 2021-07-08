import React from 'react'
import './Home.css';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import TeamsTab from '../layout/TeamsTab';
import Fixtures from '../layout/Fixtures';
import Details from '../layout/Details';
import PointsTable from '../layout/PointsTable';
import SimulatedPointsTable from '../layout/SimulatedPointsTable';
import Simulate from '../functions/Simulate';
import SimulateMultiple from '../functions/SimulateMultiple';

import { AiOutlinePlusCircle } from 'react-icons/ai'

const Home = () => {

    const [teams, setTeams] = useState([]);
    const [fixtures, setFixtures] = useState([]);
    const [details, setDetails] = useState(null);
    const [pointsTableData, setPointsTableData] = useState(null);
    const [multipleSimsPointsTable, setMultipleSimsPointsTable] = useState(null);
    const [numOfSimulations, setNumOfSimulations] = useState(0);
    const [updateState, setUpdateState] = useState(0); //state used to update the componenet on array change

    const onTeamsChange = (updatedTeamsArray) =>
    {
        setTeams(updatedTeamsArray);
        setUpdateState(updateState + 1);
    }

    const onFixturesChange = (updatedFixturesArray) =>
    {
        setFixtures(updatedFixturesArray);
        setUpdateState(updateState + 1);
    }

    const onDetailsChange = (updatedDetails) =>
    {
        setDetails(updatedDetails);
        setUpdateState(updateState + 1);   
    }

    const onSimulateClick = () =>
    {
       setPointsTableData(Simulate(teams, fixtures, details));
    }

    const onSimulateMultipleClick = () =>
    {
       setMultipleSimsPointsTable(SimulateMultiple(teams, fixtures, details, numOfSimulations));
    }

    return (
        <div style={{display : 'flex'}}>
           
            <div style={{width : "50vw"}}>
                <TeamsTab onTeamsChange={onTeamsChange}></TeamsTab>
                <Fixtures onFixturesChange={onFixturesChange} teams={teams}></Fixtures>
                <Details onDetailsChange={onDetailsChange}></Details>
                <div style={{margin : '30px'}}>
                    <h3>SIMULATE</h3>
                    <button onClick={onSimulateClick} style={{marginBottom : '10px'}}>SIMULATE ONCE</button>
                    <br></br>
                    <input type="number" placeholder="Number of Simulations"  onChange={e => setNumOfSimulations(e.target.value)}></input>
                    <button onClick={onSimulateMultipleClick}>SIMULATE MULTIPLE</button>
                </div>
            </div>
            <div>
                <PointsTable pointsTableData={pointsTableData}></PointsTable>
                <SimulatedPointsTable pointsTableData={multipleSimsPointsTable}></SimulatedPointsTable>
            </div>
           
        </div>
    )
}

export default Home
