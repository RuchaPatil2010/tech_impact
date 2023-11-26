import React from 'react';
import '../css/StaffList.css';
import Navbar from './Navbar';
import axios from "axios";
import {backend_url} from "../utils/constants";

export const StaffList = () => {

    const data = [
        {
            "_id": "654cfb17348f8bf4b3fa3e27",
            "name": "Krish",
            "username": "krish",
            "password": "$2b$05$L3Wt57T79xo3Xa07N0CQLOUf596csgX8PCukknsE6lo3N2osyyVe2",
            "email": "k@s.com",
            "contact": 7329978066,
            "address": "306 Cooper St",
            "role": "volunteer",
            "approved": false,
            "__v": 0
        },
        {
            "_id": "654cfbd1348f8bf4b3fa3e2a",
            "name": "k",
            "username": "kri",
            "password": "$2b$05$JDS32H1zFsLTkSQxsNReruQSf122TAosmsk7doRxvlQpUoKBhmskO",
            "email": "k@s.com",
            "contact": 7838,
            "address": "dhb",
            "role": "volunteer",
            "approved": false,
            "__v": 0
        },
        {
            "_id": "654d125b348f8bf4b3fa3e47",
            "name": "Krish",
            "username": "x",
            "password": "$2b$05$q0lW1R6AV7JHma0sutSaLOIi4RC1vv57qvXxbscWVGzj3fRBWiMma",
            "email": "k@gmail.com",
            "contact": 3784678,
            "address": "35",
            "role": "volunteer",
            "approved": false,
            "__v": 0
        },
        {
            "_id": "654d136758384ff31d88326f",
            "name": "K",
            "username": "krish2",
            "password": "$2b$05$Z9fsjNF9m7liIM8YNji9MOjRm24UdlCBvk8e88p7wKxaP5hCg2UPW",
            "email": "k@g.com",
            "contact": 8,
            "address": "u",
            "role": "volunteer",
            "approved": false,
            "__v": 0
        },
        {
            "_id": "65528bc058384ff31d88328e",
            "name": "Krishnasai",
            "username": "krish1234",
            "password": "$2b$05$MdIediLzohuh0CTbyS1WMedpdzixfL6kUbOjfiONJ2aco.gqtdcMO",
            "email": "krish@gmail.com",
            "contact": 17329978066,
            "address": "306 Cooper St",
            "role": "volunteer",
            "approved": false,
            "__v": 0
        },
        {
            "_id": "6552d4ef58384ff31d88329d",
            "name": "xyz",
            "username": "newuser",
            "password": "$2b$05$mcJr8qHH6SEIYjMDbF0Wq.APWT1sltgKytSECq8SxtaE5nyBupnme",
            "email": "a@g.com",
            "contact": 16783636787,
            "address": "330 cooper",
            "role": "volunteer",
            "approved": false,
            "__v": 0
        },
        {
            "_id": "655425f931e2974d0b33ef0d",
            "name": "Rucha",
            "username": "rucha",
            "password": "$2b$05$RornDCkgwncuOiJPXtlJGeP6vFNHrERJjyxvY8mg89gqS8vmmdS8i",
            "email": "r@g.com",
            "contact": 11234567890,
            "address": "sdkfnbfwibvd",
            "role": "volunteer",
            "approved": false,
            "__v": 0
        },
        {
            "_id": "655a43f358384ff31d8832ad",
            "name": "New User",
            "username": "NewUser",
            "password": "$2b$05$t5Fg7ikAyZ.9CPb7gS4hJui6pG.z1ut7mfQ2gsXxDvpky307lIpXO",
            "email": "NU@gmail.com",
            "contact": 7763367282,
            "address": "Test Address",
            "role": "volunteer",
            "approved": false,
            "__v": 0
        }
    ]

    // const data = axios(backend_url+'/users/staff_list',{
    //     method:'get',
    //     withCredentials: true,
    // }).then(function (response) {
    //     console.log(response.data);
    //     return response.data;
    // })
    // .catch(function (error) {
    //     console.log(error);
    // });

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
                    
                    { data.map((item, index) => {
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
