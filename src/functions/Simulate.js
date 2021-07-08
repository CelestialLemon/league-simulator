const Simulate = (teams, fixtures, details) =>
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

    for(var i=0; i<fixtures.length; i++)
    {
        //fixture[i]
        pointsTable.find(position => position.team == fixtures[i].team1).matchesPlayed++;
        pointsTable.find(position => position.team == fixtures[i].team2).matchesPlayed++;

        const max = 100;
        const min = 1;
        const rng = Math.floor(Math.random() * (max - min + 1) + min);
        if(rng <= fixtures[i].team1WinPercent)
        {
            //team1 wins
            pointsTable.find(position => position.team == fixtures[i].team1).wins++;
            pointsTable.find(position => position.team == fixtures[i].team1).points += parseInt(details.pointsPerWin);
            pointsTable.find(position => position.team == fixtures[i].team2).losses++;
            pointsTable.find(position => position.team == fixtures[i].team2).points += parseInt(details.pointsPerLoss);

        }
        else
        {
            //team2 wins
            pointsTable.find(position => position.team == fixtures[i].team2).wins++;
            pointsTable.find(position => position.team == fixtures[i].team2).points += parseInt(details.pointsPerWin);
            pointsTable.find(position => position.team == fixtures[i].team1).losses++;
            pointsTable.find(position => position.team == fixtures[i].team1).points += parseInt(details.pointsPerLoss);
        }
    }

    pointsTable.sort((position1, position2) =>
    {
        if(position1.points < position2.points)
        return +1;
        else
        return -1;
    })
    //console.log(pointsTable);
    return pointsTable;
}
//Math.floor(Math.random() * (max - min + 1) + min)
export default Simulate;