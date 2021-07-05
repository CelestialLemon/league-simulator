import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import './TeamsTable.css'
import { Table } from 'react-bootstrap'

import { TiDelete } from 'react-icons/ti'
import { AiFillEdit } from 'react-icons/ai';

const TeamsTable = ({teams, onTeamDeleteClick}) => {

    const rows = [];

    for(var i=0; i<teams.length; i++)
    {
        let index = i;
        rows.push(
            <tr>
            <td>{i+1}</td>
            <td>{teams[i]}</td>
            <td>
                <TiDelete className="deleteIcon" onClick={() => {onTeamDeleteClick(index)}}></TiDelete>
            </td>
            </tr>
        )
    }

    return (
        <div>
            <Table striped bordered hover>
                <thead className="thead-dark">
                    <tr>
                    <th style={{width: "50px"}}>#</th>
                    <th style={{width: "500px"}}>Team</th>
                    <th style={{width: "1px"}}></th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </Table>
        </div>
    )
}

export default TeamsTable
