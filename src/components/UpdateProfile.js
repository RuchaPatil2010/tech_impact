import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Profile.css';
import Navbar from './Navbar';

export const UpdateProfile = () => {

    let navigate = useNavigate();

    let profile = {
        "_id": "6534d0b0eeb396c40f5f2e7c",
        "name": "Chayan Khatry",
        "username": "admin",
        "password": "$2b$05$QzWzr5WFOwcIsWkzRUCyMuWakMay3vv04PvFr3LwMfP4lu88tsFCC",
        "email": "ckhatry007@gmail.com",
        "contact": 7047835620,
        "role": "admin",
        "approved": true,
        "__v": 0
    }

    window.onload = function () {
        // document.getElementById("name").defaultValue=profile.name;
        // document.getElementById("email").defaultValue=profile.email;
        // document.getElementById("contact").defaultValue=profile.contact;
        // document.getElementById("save").disabled=true;
    }

    // document.querySelector("name").addEventListener("input", (event) => {
    //     document.getElementById("save").disabled=false;
    // });

    return (
        <div class="maincontent_shift">
            <Navbar/>
            <center><h1> PROFILE </h1></center>
            <div class="profile">
                <p class="user_update_details">
                    <div class="profile_attr">Name </div> <br/>
                    <input id="name" class="profile_update" defaultValue={profile.name}/><br/><br/><br/>
                    <div class="profile_attr">Username </div> <br/>
                    <input id="username" class="profile_update" value={profile.username} disabled/><br/><br/><br/>
                    <div class="profile_attr">email </div> <br/>
                    <input id="email" class="profile_update" defaultValue={profile.email}/><br/><br/><br/>
                    <div class="profile_attr">Phone </div> <br/>
                    <input id="contact" class="profile_update" defaultValue={profile.contact}/><br/><br/><br/>
                    <div class="profile_attr">Role </div> <br/>
                    <input id="role" class="profile_update" value={profile.role} disabled/><br/><br/><br/><br/>   
                    <button id = "save" class="save" onClick={function(event) {navigate('/profile')}}>SAVE</button>
                    <button class="cancel" onClick={function(event) {navigate('/profile')}}>Cancel</button> <br/>
                </p>

            </div>
        </div>
    );
};

export default UpdateProfile;
