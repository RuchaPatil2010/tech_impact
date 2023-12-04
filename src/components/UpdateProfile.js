import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import '../css/Profile.css';
import Navbar from './Navbar';
import {useSelector} from "react-redux";
import {backend_url} from "../utils/constants";
import axios from "axios";

export const UpdateProfile = () => {

    let navigate = useNavigate();

    const user = useSelector(state => state.user.user);
    const [name,setName] = useState(user.name);
    const [email,setEmail] = useState(user.email);
    const [contact,setContact] = useState(user.contact);

    const onContactChange = (e)=>{
        setContact(e.target.value);
    }
    const onEmailChange = (e)=>{
        setEmail(e.target.value);
    }
    const onNameChange = (e)=>{
        setName(e.target.value);
    }

    const onUpdate = ()=>{
        axios.post(backend_url+'/users/edit',{
            username:user.username,
            name:name,
            email:email,
            contact:contact
        }).then(()=>navigate('/reloader',{state:{route:'/profile'}})).catch(err=>console.log(err));
    };

    return (
        <div class="maincontent_shift">
            <Navbar/>
            <center><h1> PROFILE </h1></center>
            <div class="profile">
                <p class="user_update_details">
                    <div class="profile_attr">Name</div>
                    <br/>
                    <input id="name" class="profile_update" onChange={onNameChange} defaultValue={name}/><br/><br/><br/>
                    <div class="profile_attr">Username</div>
                    <br/>
                    <input id="username" class="profile_update" value={user.username} disabled/><br/><br/><br/>
                    <div class="profile_attr">email</div>
                    <br/>
                    <input id="email" class="profile_update" onChange={onEmailChange} defaultValue={email}/><br/><br/><br/>
                    <div class="profile_attr">Phone</div>
                    <br/>
                    <input id="contact" class="profile_update" onChange={onContactChange} defaultValue={contact}/><br/><br/><br/>
                    <div class="profile_attr">Role</div>
                    <br/>
                    <input id="role" class="profile_update" value={user.role} disabled/><br/><br/><br/><br/>
                    <button id="save" class="save" onClick={onUpdate}>SAVE
                    </button>
                    <button class="cancel" onClick={function (event) {
                        navigate('/profile')
                    }}>Cancel
                    </button>
                    <br/>
                </p>

            </div>
        </div>
    );
};

export default UpdateProfile;
