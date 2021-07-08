import React from 'react'

import { useState, useEffect } from 'react';

import './PointsTable.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'react-bootstrap'

const PointsTable = ({pointsTableData}) => {

    
    const rows = [];

    if(pointsTableData)
    {
        for(var i=0; i<pointsTableData.length; i++)
        {
            let index = i;
            rows.push(
                <tr>
                    <td>{index + 1}</td>
                    <td>{pointsTableData[i].team}</td>
                    <td>{pointsTableData[i].matchesPlayed}</td>
                    <td>{pointsTableData[i].wins}</td>
                    <td>{pointsTableData[i].losses}</td>
                    <td>0</td>
                    <td>0</td>
                    <td>{pointsTableData[i].points}</td>
                </tr>
            )
        }
    }


    useEffect(() =>
    {
        console.log("printing points table data");
        console.log(pointsTableData);
        
    }, [pointsTableData])

    return (
        <div className="points-table-container">
            <h3>POINTS TABLE</h3>
            <div>
            <Table striped bordered hover>
                <thead className="thead-dark">
                    <tr>
                    <th style={{width: "50px"}}>#</th>
                    <th style={{width: "500px"}}>Team</th>
                    <th style={{width: "1px"}}>MP</th>
                    <th style={{width: "1px"}}>W</th>
                    <th style={{width: "1px"}}>L</th>
                    <th style={{width: "1px"}}>NR</th>
                    <th style={{width: "1px"}}>NRR</th>
                    <th style={{width: "1px"}}>Points</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </Table>
            </div>
        </div>
    )
}

export default PointsTable
