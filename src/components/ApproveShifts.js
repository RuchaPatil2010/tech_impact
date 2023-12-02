import React from 'react';
import '../css/ApproveUsers.css';
import Navbar from './Navbar';
import {backend_url} from "../utils/constants";
import axios from "axios";
import { useState, useEffect } from 'react';

export const ApproveShifts = () => {

    const [doesChange, setDoesChange] = useState(0);
    const [data,setData] = useState();
    useEffect(()=>{axios(backend_url+'/shifts/shift_requests',{
        method:'get',
        params: {username:"admin"},
    }).then(function (response) {
        console.log(response.data);
        setData(response.data);
    })
    .catch(function (error) {
        console.log(error);
    });},[])

    const [approve,setApprove] = useState([]);

    const add_id = (id, val) => {
        console.log(id);
        const x = approve;
        if(!x.hasOwnProperty(id)){
            x[id] = [];
        }
        x[id].push(val);
        setApprove(x);
    }

    const approveFunction = () => {
        let shift_details = []
        for (const [key, value] of Object.entries(approve)) {
            shift_details.push(
            {shift_id: key,
            user_ids: value}
            )
        }
        console.log(shift_details);
        console.log(approve);

        axios.post(backend_url+'/shifts/approve_shifts',{
            shift_details
        },
            {params: {username:"admin"}}
        ).then(function (response) {
            console.log(response);
            setDoesChange(doesChange + 1);
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    const denyFunction = () => {
        let shift_details = []
        for (const [key, value] of Object.entries(approve)) {
            shift_details.push(
            {shift_id: key,
            user_ids: value}
            )
        }
        console.log(shift_details);
        console.log(approve);

        axios.post(backend_url+'/shifts/deny_shifts',{
            shift_details
        },
            {params: {username:"admin"}}
        ).then(function (response) {
            console.log(response);
            setDoesChange(doesChange + 1);
        })
        .catch(function (error) {
            console.log(error);
        });
    }


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
                    
                    { data?.map((item, index) => {
                        return(
                            
                        item.users.map((item_user, index_user) => {
                            console.log(item_user);
                            console.log(item);
                            return (
                                <tr class="row_user">
                                    <td class="cell_user"><input id="temp" type="checkbox" onClick={() => {add_id(item._id,item_user._id)}}/><label id={item_user._id}></label></td>
                                    <td class="cell_user"> {item_user.name}</td>
                                    <td class="cell_user"> {item.title} </td>
                                    <td class="cell_user"> {item.date.split("T")[0]} {(Math.floor(item.startTime/1000)==0? "0": "") + Math.floor(item.startTime/100) + ":" + ((item.startTime%100 < 10) ? "0" : "") + item.startTime%100} - {(Math.floor(item.endTime/1000)==0? "0": "") + Math.floor(item.endTime/100) + ":" + ((item.endTime%100 < 10) ? "0" : "") + item.endTime%100} </td>
                                    <td class="cell_user"> {item.location} </td>
                                </tr>
                            )
                        })
                        );                                               
                    }
                    )}

                </table>
                </div>
                
                <button class="approve" onClick={approveFunction}>APPROVE</button>
                <button class="reject" onClick={denyFunction}>REJECT</button>
        </div>
    );
};

export default ApproveShifts;
