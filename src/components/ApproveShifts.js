import React from 'react';
import '../css/ApproveUsers.css';
import Navbar from './Navbar';

export const ApproveShifts = () => {

    const data = [
        {
            "_id": "6558315d241ca9bb0f41d134",
            "title": "test",
            "date": "2023-11-12T05:00:00.000Z",
            "startTime": 800,
            "endTime": 1200,
            "max_volunteers": 2,
            "assignedVolunteers": [],
            "requests": [],
            "__v": 0
        },
        {
            "_id": "6558317f241ca9bb0f41d13a",
            "title": "test",
            "date": "2023-11-17T05:00:00.000Z",
            "startTime": 800,
            "endTime": 1200,
            "max_volunteers": 2,
            "assignedVolunteers": [],
            "requests": [],
            "__v": 0
        },
        {
            "_id": "655831a1241ca9bb0f41d13e",
            "title": "test",
            "date": "2023-11-17T05:00:00.000Z",
            "startTime": 1400,
            "endTime": 1500,
            "max_volunteers": 2,
            "assignedVolunteers": [],
            "requests": [],
            "__v": 0
        }
    ]

    return (
        <div class="maincontent">
            <Navbar/>
            <br></br>

            <h2><center>PENDING SHIFT APPROVAL</center></h2>

            <div class="table_bg">
                
                <table class="rows">
                    <th class="header"></th>
                    <th class="header">Name</th>
                    <th class="header">Organization</th>
                    <th class="header">Shift Timing</th>
                    <th class="header">Location</th>
                    
                    { data.map((item, index) => {
                        return (
                            <tr class="row_user">
                                <td class="cell_user"><input id="temp" type="checkbox"/><label id={item.username}></label></td>
                                <td class="cell_user"> {item.name}</td>
                                <td class="cell_user"> {item.organization} </td>
                                <td class="cell_user"> {(Math.floor(item.startTime/1000)==0? "0": "") + Math.floor(item.startTime/100) + ":" + ((item.startTime%100 < 10) ? "0" : "") + item.startTime%100} - {(Math.floor(item.endTime/1000)==0? "0": "") + Math.floor(item.endTime/100) + ":" + ((item.endTime%100 < 10) ? "0" : "") + item.endTime%100} </td>
                                <td class="cell_user"> {item.location} </td>
                            </tr>
                        )
                    })}

                </table>
                </div>
                
                <button class="approve" onClick={function(event) {}}>APPROVE</button>
                <button class="reject" onClick={function(event) {}}>REJECT</button>
        </div>
    );
};

export default ApproveShifts;
