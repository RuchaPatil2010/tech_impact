import React, {useEffect, useState} from 'react';
import '../css/StaffList.css';
import Navbar from './Navbar';
import axios from "axios";
import {backend_url} from "../utils/constants";
import {useSelector} from "react-redux";

export const StaffList = () => {

    const [data, setData] = useState();
    const user = useSelector(state=>state.user.user);
    const username = user.username;

    useEffect(() => {
        axios.get(backend_url + '/users/staff_list', {params: {username: username},})
            .then((response)=>setData(response.data)).catch((error)=>console.log(error));
    }, [])

    return (
        <div class="maincontent">
            <Navbar/>
            <br></br>

            <h2>
                <center>STAFF LIST</center>
            </h2>

            <div class="table_bg2">

                <table className="rows">
                    <th className="header">Name</th>
                    <th className="header">Email</th>
                    <th className="header">Phone</th>
                    <th className="header">City/Town</th>
                    {data?.map((item, index) => {
                        return (
                            <tr key={index} class="row_user">
                                <td className="cell_user"> {item.name} </td>
                                <td className="cell_user"> {item.email} </td>
                                <td className="cell_user"> {item.contact} </td>
                                <td className="cell_user"> {item.address} </td>
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
