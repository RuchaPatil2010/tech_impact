import React from 'react';
import {useNavigate} from 'react-router-dom';
import '../css/Profile.css';
import Navbar from './Navbar';
import {useSelector} from "react-redux";

export const Profile = () => {

    let navigate = useNavigate();
    const user = useSelector(state => state.user.user);

    return (
        <div class="maincontent_shift">
            <Navbar/>
            <center><h1> PROFILE </h1></center>
            <div class="profile">
                <p class="user_details">
                    <div class="user_attr">Name</div>
                    <br/>
                    <div class="user_val">{user.name}</div>
                    <br/><br/>
                    <div class="user_attr">Username</div>
                    <br/>
                    <div class="user_val">{user.username}</div>
                    <br/><br/>
                    <div class="user_attr">email</div>
                    <br/>
                    <div class="user_val">{user.email}</div>
                    <br/><br/>
                    <div class="user_attr">Phone</div>
                    <br/>
                    <div class="user_val">{user.contact}</div>
                    <br/><br/>
                    <div class="user_attr">Role</div>
                    <br/>
                    <div class="user_val">{user.role}</div>
                    <br/><br/><br/>
                    <button className="add" onClick={function (event) {
                        navigate('/updateProfile')
                    }}>UPDATE
                    </button>
                    <br/>
                </p>

            </div>
        </div>
    );
};

export default Profile;
