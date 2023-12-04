import React, {useEffect, useState} from 'react';
import '../css/ApproveUsers.css';
import Navbar from './Navbar';
import {backend_url} from "../utils/constants";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";

export const ApproveUsers = () => {

    let navigate = useNavigate();
    const [data, setData] = useState();
    const user = useSelector(state=>state.user.user);
    const username = user.username;

    useEffect(() => {
        axios.get(backend_url + '/users/pending_approval', {params: {username: username}})
            .then(res=>setData(res.data)).catch(err=>console.log(err));
    }, [])

    const [approve, setApprove] = useState([]);

    const add_id = (id) => {
        console.log(id);
        const x = approve;
        x.push(id);
        setApprove(x);
    }


    const approveFunction = () => {
        axios.get(backend_url + '/users/approve_users', {
            params: {username: username, usernames: approve},
        }).then(()=>navigate('/reloader',{state:{route:'/approveUsers'}})).catch((error)=> console.log(error));
    }

    const denyFunction = () => {
        axios.get(backend_url + '/users/deny_users', {
            params: {username: username, usernames: approve},
        }).then(()=>navigate('/reloader',{state:{route:'/approveUsers'}})).catch((error)=> console.log(error));
    }


    return (
        <div className="maincontent">
            <Navbar/>
            <br></br>

            <h2>
                <center>PENDING USER APPROVAL</center>
            </h2>

            <div className="table_bg">
                <table className="rows">
                    <th className="header"></th>
                    <th className="header">Name</th>
                    <th className="header">Email</th>
                    <th className="header">Phone</th>
                    <th className="header">City/Town</th>

                    {data?.map((item, index) => {
                        return (
                            <tr className="row_user">
                                <td className="cell_user"><input id="temp" type="checkbox" onClick={() => {
                                    add_id(item.username)
                                }}/><label id={item.username}></label></td>
                                <td className="cell_user"> {item.name}</td>
                                <td className="cell_user"> {item.email} </td>
                                <td className="cell_user"> {item.contact} </td>
                                <td className="cell_user"> {item.address} </td>
                            </tr>
                        )
                    })}
                </table>
            </div>

            <button className="approve" onClick={approveFunction}>APPROVE</button>
            <button className="reject" onClick={denyFunction}>REJECT</button>
        </div>
    );
};

export default ApproveUsers;
