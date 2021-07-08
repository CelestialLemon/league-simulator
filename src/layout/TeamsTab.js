import React from 'react'
import '../pages/Home.css';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import TeamsTable from '../components/TeamsTable';

import { AiOutlinePlusCircle } from 'react-icons/ai'

const TeamsTab = ({onTeamsChange}) => {

    const [addTeamInput, setAddTeamInput] = useState('');
    const [teams, setTeams] = useState([]);
    const [errorMsg, setErrorMsg] = useState('');
    
    const onAddTeamClick = () =>
    {
        if(addTeamInput !== '')
        {
            let teamAlreadyExists = false;
            for(var i=0; i<teams.length; i++)
            {
                if(addTeamInput === teams[i])
                teamAlreadyExists = true;
            }

            if(teamAlreadyExists)
            {
                setErrorMsg("Team Already Exists");
            }
            else
            {
                setErrorMsg("");
                const temp = teams;
                temp.push(addTeamInput);
                setTeams(temp);
                setAddTeamInput('');
                onTeamsChange(teams); //pass upddated data to parent componenet
            }
            
        }
        
    }

    const onTeamDeleteClick = (indexDeleted) =>
    {
        let testingArray = teams;
        testingArray = testingArray.filter((element, index) => index !== indexDeleted)
        setTeams(testingArray);
        console.log("Deleted element " + indexDeleted);
        onTeamsChange(teams); //pass upddated data to parent componenet
    }


    return (
        <div>
            <div className='teams-table'>
            <h3>TEAMS</h3>
            <TeamsTable onTeamDeleteClick={onTeamDeleteClick} teams={teams}></TeamsTable>
            <h3 className="errorMsg">{errorMsg}</h3>
            <div>
                <input 
                    className="addTeamInputBar" type="text" value={addTeamInput} 
                    onChange={(e) => setAddTeamInput(e.target.value)}>
                </input>
                <button className="addButton" onClick={onAddTeamClick}>Add</button>
            </div>
            </div>
             
        </div>
    )
}

export default TeamsTab
