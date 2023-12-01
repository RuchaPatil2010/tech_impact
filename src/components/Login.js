import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../css/Login.css';
import volunteer from '../images/volunteer-hand.png'
import {MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import Button from 'react-bootstrap/Button';
import axios from "axios";
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import {backend_url} from "../utils/constants";

import { Provider } from 'react-redux';
import rootReducer from './rootReducer.js';
import { changeUser } from './action.js'
import { RedirectFunction } from 'react-router-dom';

function Login() {
    let navigate = useNavigate();
    const dispatch = useDispatch()

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState();
    const errorMessage = <p style={{color: 'red'}}>Invalid Login Credentials. Please try again!</p>

    // Function to handle username
    const handleUsername = (event) =>{
        setUsername(event.target.value);
    }
    
    // Function to handle Password
    const handlePassword = (event) =>{
        setPassword(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        axios.post(backend_url+'/users/login', {username:username,password:password})
        .then(response => {
          console.log(response);
          dispatch(changeUser(response.data))
          navigate('/dashboard')
        })
        .catch(err => {
          console.log(err)
          setError(err.message)
        })
    }

  return (
    <MDBContainer fluid className="p-3 my-5 h-custom">

      <MDBRow>
        <MDBCol col='10' md='6'>
            <img src={volunteer} class="img-fluid" alt="Volunteer image" />
        </MDBCol>

        
        <MDBCol col='4' md='6'>
        <div class='login-box'>
          <div className="d-flex flex-row align-items-center justify-content-center">
            <h4><b>Login to your account</b></h4>
          </div>
          
          <div class='input-box'>
          <b>Username</b>
            <MDBInput wrapperClass='mb-4' id='formControlLg' name='username' onChange={handleUsername} type='email' size="lg"/>
            <b>Password</b>
            <MDBInput wrapperClass='mb-4' id='formControlLg' name='password' onChange={handlePassword} type='password' size="lg"/>
          </div>

          <div className="d-flex justify-content-between mb-4">
            {/* <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' /> */}
            {error ? errorMessage : null}
          </div>
          <div className="d-flex justify-content-between mb-4">
            {/* <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' /> */}
            <a href="!#">Forgot password?</a>
          </div>
          <div className='text-center text-md-start mt-4 pt-2'>
            <Button className="mb-0 px-5" onClick={handleSubmit}>Login</Button>

            <p className="small fw-bold mt-2 pt-1 mb-2">Create an account? <Link to="/register">Sign-Up</Link></p>
          </div>
          </div>
        </MDBCol>
        
      </MDBRow>

    </MDBContainer>
  );
}

export default Login;