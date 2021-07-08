import Simulate from "./Simulate";

const SimulateMultiple = (teams, fixtures, details, numOfSimulations) =>
{
    let pointsTable = [];

    for(var i=0; i<teams.length; i++)
    {
        const pointsTablePosition = {
            "team" : teams[i],
            "matchesPlayed" : 0,
            "wins" : 0,
            "losses" : 0,
            "points" : 0,
            "NRR" : 0
        }
        pointsTable.push(pointsTablePosition);
    }

    for(var i=0; i<numOfSimulations; i++)
    {
        const res = Simulate(teams, fixtures, details);
        res.forEach(tempPos => {
            pointsTable.find(position => position.team == tempPos.team).matchesPlayed += tempPos.matchesPlayed; 
            pointsTable.find(position => position.team == tempPos.team).wins += tempPos.wins; 
            pointsTable.find(position => position.team == tempPos.team).losses += tempPos.losses; 
            pointsTable.find(position => position.team == tempPos.team).points += tempPos.points; 
        })
    }


    for(var i=0; i<pointsTable.length; i++)
    {
        pointsTable[i].matchesPlayed /= numOfSimulations;
        pointsTable[i].wins /= numOfSimulations;
        pointsTable[i].losses /= numOfSimulations;
        pointsTable[i].points /= numOfSimulations;
        
    }

    pointsTable.sort((position1, position2) =>
    {
        if(position1.points < position2.points)
        return +1;
        else
        return -1;
    })

    return pointsTable;
}

export default SimulateMultiple;
