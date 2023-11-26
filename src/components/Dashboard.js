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
        console.log(Navbar);
        const headerMessage = "Welcome to Tech Impact"
        const displayMessage1 = "We believe in harnessing the power of technology for positive change"
        const displayMessage2 = "Explore Volunteer Connection, our online portal to create meaningful impact together."
        const displayMessage3 = "Join us in building a better world—one volunteer shift at a time."
        
    return(
        <div>
            <div style={myStyle}>
                <div class="container_dashboard">
                    <h1>{headerMessage}</h1>
                    <p>{displayMessage1}</p>
                        <p>{displayMessage2} <br/> {displayMessage3} </p>
                </div>
            </div>
        </div>
     
    )
}

export default Dashboard;