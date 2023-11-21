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

    return (
        <div class="maincontent_shift">
            <Navbar/>
            <div class="profile">
                <p class="user_update_details">
                    <div class="profile_attr">Name </div> <br/>
                    <input id="name" class="profile_update" value={profile.name}/><br/><br/><br/>
                    <div class="profile_attr">Username </div> <br/>
                    <input id="name" class="profile_update" value={profile.username}/><br/><br/><br/>
                    <div class="profile_attr">email </div> <br/>
                    <input id="name" class="profile_update" value={profile.email}/><br/><br/><br/>
                    <div class="profile_attr">Phone </div> <br/>
                    <input id="name" class="profile_update" value={profile.contact}/><br/><br/><br/>
                    <div class="profile_attr">Role </div> <br/>
                    <input id="name" class="profile_update" value={profile.role}/><br/><br/><br/><br/>   
                    <button class="save" onClick={function(event) {navigate('/profile')}}>SAVE</button>
                    <button class="cancel" onClick={function(event) {navigate('/profile')}}>Cancel</button> <br/>
                </p>

            </div>
        </div>
    );
};

export default UpdateProfile;
