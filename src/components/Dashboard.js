import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import volunteer from '../images/volunteer-hand.png';
import Navbar from './Navbar';
import '../css/Dashboard.css';

function Dashboard() {
    const myStyle = {
        backgroundImage: `url(${volunteer})`,
        height: '100vh',
        marginTop: '-70px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    };
    console.log(Navbar);
    const headerMessage = "Welcome to Tech Impact"
    const displayMessage1 = "We believe in harnessing the power of technology for positive change"
    const displayMessage2 = "Explore Volunteer Connection, our online portal to create meaningful impact together."
    const displayMessage3 = "Join us in building a better world—one volunteer shift at a time."

    return (
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