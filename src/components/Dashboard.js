import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import volunteer from '../images/volunteer-hand.png';
import user from '../images/user.png';
import calendar from '../images/calendar.png';
import logout from '../images/logout.png';
import axios from "axios";
import { useState } from 'react';
import Navbar from './Navbar';
import '../css/Dashboard.css';
import { IconContext } from 'react-icons';
import { useNavigate, Link } from 'react-router-dom';


import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBRow,
    MDBCol,
    MDBBtn
  } from 'mdb-react-ui-kit';

function Dashboard() {
        const myStyle={
            backgroundImage: `url(${volunteer})`,
            height:'100vh',
            marginTop:'-70px',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        };
        const style2={
            zIndex: 2000
        }
        console.log(Navbar);
        const displayMessage = "Welcome to Tech Impact, where we believe in harnessing the power of technology for positive change. \
        Explore Volunteer Connection, our online portal empowering nonprofits and volunteers to create meaningful impact together. \
        Join us in building a better world—one volunteer shift at a time."
    return(
        <div>
        <div style={style2}>
        <Navbar />
        </div>
    <div style={myStyle}>
        
        <div class="container">
        <div class="clickable-box">
            <p>{displayMessage}</p>
        </div>
        {/* <div class="clickable-box">
            <Link to="/shift">
                <img src={calendar} alt="calendar" class="icon" />
                <p class="text">Shifts</p>
            </Link>
            <Link to="/profile">
                <img src={user} alt="profile" class="icon" />
                <p class="text">Profile</p>
            </Link>
        </div>
        <div class="clickable-box">
            <Link to="/login">
                <img src={logout} alt="logout" class="icon" />
                <p class="text">Logout</p>
            </Link>
        </div> */}
        </div>
    </div>
    </div>
     
    )
}

export default Dashboard;