import React from 'react';
import '../css/StaffList.css';
import Navbar from './Navbar';
import axios from "axios";
import { useState, useEffect } from 'react';
import {backend_url} from "../utils/constants";

export const StaffList = () => {

    const [data,setData] = useState();
    useEffect(()=>{axios(backend_url+'/users/staff_list',{
        method:'get',
        params: {username:"admin"},
    }).then(function (response) {
        console.log(response.data);
        setData(response.data);
    })
    .catch(function (error) {
        console.log(error);
    });})

    return (
        <div class="maincontent">
            <Navbar/>
            <br></br>

            <h2><center>STAFF LIST</center></h2>

            <div class="table_bg2">

                <table class="rows">
                    <th class="header">Name</th>
                    <th class="header">Email</th>
                    <th class="header">Phone</th>
                    <th class="header">City/Town</th>
                    {console.log(data)}
                    { data?.map((item, index) => {
                        return (
                            <tr class="row_user">
                                <td class="cell_user"> {item.name} </td>
                                <td class="cell_user"> {item.email} </td>
                                <td class="cell_user"> {item.contact} </td>
                                <td class="cell_user"> {item.address} </td>
                            </tr>
                        )
                    })}
                </table>
                </div>
                <br/>
        </div>
    );
};

export default StaffList;
