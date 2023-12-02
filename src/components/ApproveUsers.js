import React from 'react';
import { useState, useEffect } from 'react';
import '../css/ApproveUsers.css';
import Navbar from './Navbar';
import {backend_url} from "../utils/constants";
import axios from "axios";

export const ApproveUsers = () => {

    const [doesChange, setDoesChange] = useState(0);
    const [data,setData] = useState();
    useEffect(()=>{axios(backend_url+'/users/pending_approval',{
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

    const add_id = (id) => {
        console.log(id);
        const x = approve;
        x.push(id);
        setApprove(x);
    }

    

    const approveFunction = () => {
        axios(backend_url+'/users/approve_users',{
            method:'get',
            params: {username:"admin", usernames:approve},
        }).then(function (response) {
            console.log(response);
            setDoesChange(doesChange + 1);
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    const denyFunction = () => {
        axios(backend_url+'/users/deny_users',{
            method:'get',
            params: {usernames:approve},
        }).then(function (response) {
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

            <h2><center>PENDING USER APPROVAL</center></h2>

            <div class="table_bg">
                <table class="rows">
                    <th class="header"></th>
                    <th class="header">Name</th>
                    <th class="header">Email</th>
                    <th class="header">Phone</th>
                    <th class="header">City/Town</th>
                    
                    { data?.map((item, index) => {
                        return (
                            <tr class="row_user">
                                <td class="cell_user"><input id="temp" type="checkbox" onClick={() => {add_id(item.username)}}/><label id={item.username}></label></td>
                                <td class="cell_user"> {item.name}</td>
                                <td class="cell_user"> {item.email} </td>
                                <td class="cell_user"> {item.contact} </td>
                                <td class="cell_user"> {item.address} </td>
                            </tr>
                        )
                    })}
                </table>
                </div>
                
                <button class="approve" onClick={approveFunction}>APPROVE</button>
                <button class="reject" onClick={denyFunction}>REJECT</button>
        </div>
    );
};

export default ApproveUsers;
