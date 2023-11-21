import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Profile.css';
import Navbar from './Navbar';

export const Profile = () => {

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

    // const event_data_2 = axios(backend_url+'/shifts/shifts',{
    //     method:'get',
    //     withCredentials: true,
    // }).then(function (response) {
    //     console.log(response.data);
    //     return response.data;
    // })
    // .catch(function (error) {
    //     console.log(error);
    // });

    return (
        <div class="maincontent_shift">
            <Navbar/>
            <div class="profile">
                <p class="user_details">
                    <div class="profile_attr">Name </div> <br/>
                    <div class="profile_val">{profile.name}</div> <br/><br/>
                    <div class="profile_attr">Username </div> <br/>
                    <div class="profile_val">{profile.username}</div> <br/><br/>
                    <div class="profile_attr">email </div> <br/>
                    <div class="profile_val">{profile.email}</div> <br/><br/>
                    <div class="profile_attr">Phone </div> <br/>
                    <div class="profile_val">{profile.contact}</div> <br/><br/>
                    <div class="profile_attr">Role </div> <br/>
                    <div class="profile_val">{profile.role}</div> <br/><br/><br/>   
                    <button class="add" onClick={function(event) {navigate('/updateProfile')}}>UPDATE</button> <br/>
                </p>

            </div>
        </div>
    );
};

export default Profile;
