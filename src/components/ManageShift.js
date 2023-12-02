import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/ManageShift.css';
import Scheduler from '../utils/Scheduler.js';
import Navbar from './Navbar';

export const ManageShift = () => {

    return (
        <div class="maincontent_shift">
            <Navbar/>
            
            <div class="calendar_shift">
                <Scheduler/>
            </div>
        </div>
    );
};

export default ManageShift;
