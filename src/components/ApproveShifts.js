import React, {useEffect, useState} from 'react';
import '../css/ApproveUsers.css';
import Navbar from './Navbar';
import {backend_url} from "../utils/constants";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";

export const ApproveShifts = () => {

    const [data, setData] = useState();
    let navigate = useNavigate();
    const user = useSelector(state=>state.user.user);
    const username = user.username;

    useEffect(() => {
        axios(backend_url + '/shifts/shift_requests', {
            method: 'get',
            params: {username: username},
        }).then((response) =>setData(response.data)).catch((error)=> console.log(error));
    }, []);

    const [approve, setApprove] = useState([]);

    const add_id = (id, val) => {
        const x = approve;
        if (!x.hasOwnProperty(id)) {
            x[id] = [];
        }
        x[id].push(val);
        setApprove(x);
    }

    const approveFunction = () => {
        let shift_details = []
        for (const [key, value] of Object.entries(approve)) {
            shift_details.push({shift_id: key, user_ids: value});
        }
        axios.post(backend_url + '/shifts/approve_shifts', {shift_details}, {params: {username: username}})
            .then(()=>navigate('/reloader',{state:{route:'/approveShifts'}})).catch((error)=> console.log(error));
    }

    const denyFunction = () => {
        let shift_details = []
        for (const [key, value] of Object.entries(approve)) {
            shift_details.push({shift_id: key, user_ids: value})
        }
        axios.post(backend_url + '/shifts/deny_shifts', {shift_details}, {params: {username: username}})
            .then(() =>navigate('/reloader',{state:{route:'/approveShifts'}}))
            .catch((error) => console.log(error));
    }


    return (
        <div class="maincontent">
            <Navbar/>
            <br></br>

            <h2>
                <center>PENDING SHIFT APPROVAL</center>
            </h2>

            <div class="table_bg">

                <table className="rows">
                    <th className="header"></th>
                    <th className="header">Name</th>
                    <th className="header">Organization</th>
                    <th className="header">Shift Timing</th>
                    <th className="header">Location</th>

                    {data?.map((item, index) => {
                            return (
                                item.users.map((item_user, index_user) => {
                                    return (
                                        <tr class="row_user">
                                            <td className="cell_user"><input id="temp" type="checkbox" onClick={() => {
                                                add_id(item._id, item_user._id)
                                            }}/><label id={item_user._id}></label></td>
                                            <td className="cell_user"> {item_user.name}</td>
                                            <td className="cell_user"> {item.title} </td>
                                            <td className="cell_user"> {item.date.split("T")[0]} {(Math.floor(item.startTime / 1000) === 0 ? "0" : "") + Math.floor(item.startTime / 100) + ":" + ((item.startTime % 100 < 10) ? "0" : "") + item.startTime % 100} - {(Math.floor(item.endTime / 1000) === 0 ? "0" : "") + Math.floor(item.endTime / 100) + ":" + ((item.endTime % 100 < 10) ? "0" : "") + item.endTime % 100} </td>
                                            <td className="cell_user"> {item.location} </td>
                                        </tr>
                                    )
                                })
                            );
                        }
                    )}

                </table>
            </div>

            <button className="approve" onClick={approveFunction}>APPROVE</button>
            <button className="reject" onClick={denyFunction}>REJECT</button>
        </div>
    );
};

export default ApproveShifts;
