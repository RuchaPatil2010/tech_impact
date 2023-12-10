import React from 'react';
import {useNavigate} from 'react-router-dom';
import '../css/Profile.css';
import Navbar from './Navbar';
import {useSelector} from "react-redux";

function formatPhoneNumber(phoneNumberString) {
    var cleaned = ('' + phoneNumberString).replace(/\D/g, '');
    var match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      var intlCode = (match[1] ? '+1 ' : '');
      return [intlCode, '(', match[2], ') ', match[3], '-', match[4]].join('');
    }
    return null;
  }

export const Profile = () => {

    let navigate = useNavigate();
    const user = useSelector(state => state.user.user);

    return (
        <div class="maincontent_shift">
            <Navbar/>
            <center><h1> PROFILE </h1></center>
            <div class="profile">
                <p class="user_details">
                    <div class="user_attr"><b>Name</b></div>
                    <br/>
                    <div class="user_val">{user.name}</div>
                    <br/><br/>
                    <div class="user_attr"><b>Username</b></div>
                    <br/>
                    <div class="user_val">{user.username}</div>
                    <br/><br/>
                    <div class="user_attr"><b>Email</b></div>
                    <br/>
                    <div class="user_val">{user.email}</div>
                    <br/><br/>
                    <div class="user_attr"><b>Phone</b></div>
                    <br/>
                    <div class="user_val">{formatPhoneNumber(user.contact)}</div>
                    <br/><br/>
                    <div class="user_attr"><b>Role</b></div>
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
