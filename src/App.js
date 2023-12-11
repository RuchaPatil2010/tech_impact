import Dashboard from './components/Dashboard';
import HomePage from './components/HomePage';
import Login from './components/Login';
import Register from './components/Register';
import WithNav from './components/WithNav';
import WithoutNav from './components/WithoutNav';
import History from './components/VolunteerHistory';
import ManageShift from './components/ManageShift';
import ApproveUsers from './components/ApproveUsers';
import StaffList from './components/StaffList';
import Future from './components/VolunteerFuture';
import React from 'react';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ApproveShifts from './components/ApproveShifts';
import Profile from './components/Profile';
import UpdateProfile from './components/UpdateProfile';
import Reloader from './components/Reloader';
import ForgotPassword from "./components/ForgotPassword";


function App() {
    return (
        <Router>
            <Routes>
                <Route element={<WithNav/>}>
                    <Route path="/dashboard" element={<Dashboard/>}/>
                    <Route path="/history" element={<History/>}/>
                    <Route path="/upcoming" element={<Future/>}/>
                </Route>
                <Route element={<WithoutNav/>}>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/dashboard" element={<Dashboard/>}/>
                    <Route path="/manageShift" element={<ManageShift/>}/>
                    <Route path="/approveUsers" element={<ApproveUsers/>}/>
                    <Route path="/staffList" element={<StaffList/>}/>
                    <Route path="/approveShifts" element={<ApproveShifts/>}/>
                    <Route path="/profile" element={<Profile/>}/>
                    <Route path="/updateProfile" element={<UpdateProfile/>}/>
                    <Route path="/reloader" element={<Reloader/>}/>
                    <Route path="/forgotpassword" element={<ForgotPassword/>}/>
                </Route>
            </Routes>
        </Router>
    );
}

export default App;