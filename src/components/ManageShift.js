import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ManageShift.css';
import {Calender, Calendar_week} from '../utils/Calender.js';
import Scheduler from '../utils/Scheduler.jsx';
import Navbar from './Navbar';

export const ManageShift = () => {

    let navigate = useNavigate();

    return (
        <div class="maincontent">
            <Navbar/>
            <div class="calendar">
            <Scheduler/>
            </div>
            <div class="leftPanel">
                <Calender style={{width:'50%',}}/>
            </div>
        </div>
    );
};

export default ManageShift;
