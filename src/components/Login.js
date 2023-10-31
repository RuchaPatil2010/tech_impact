import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../css/Login.css';
import volunteer from '../images/volunteer-hand.png'
import {MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import axios from "axios";
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';


function Login() {
    let navigate = useNavigate();

    const [post, setPost] = useState({
        username: '',
        password: ''
    })

    const handleInput = (event) =>{
        setPost({...post, [event.target.name]: event.target.value})
    }

    function handleSubmit(event) {
        event.preventDefault()
        axios.post('http://localhost:8000/users/login', {post})
        .then(response => console.log(response))
        .catch(err => console.log(err))
    }

  return (
    <MDBContainer fluid className="p-3 my-5 h-custom">

      <MDBRow>
        <MDBCol col='10' md='6'>
            <img src={volunteer} class="img-fluid" alt="Volunteer image" />
        </MDBCol>

        <MDBCol col='4' md='6'>

          <div className="d-flex flex-row align-items-center justify-content-center">

            <p className="lead fw-bold mb-0 me-3">Login to your account</p>
          </div>
          <p > Email </p>
          <MDBInput wrapperClass='mb-4' id='formControlLg' name='username' onChange={handleInput} type='email' size="lg"/>
          <p>Password</p>
          <MDBInput wrapperClass='mb-4' id='formControlLg' name='password' onChange={handleInput} type='password' size="lg"/>

          <div className="d-flex justify-content-between mb-4">
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
            <a href="!#">Forgot password?</a>
          </div>

          <div className='text-center text-md-start mt-4 pt-2'>
            <MDBBtn className="mb-0 px-5" onClick={handleSubmit}>Login</MDBBtn>
            
            <div className="divider d-flex align-items-center my-4">
            <p className="text-center fw-bold mx-3 mb-0">Or</p>
            </div>

            <p className="small fw-bold mt-2 pt-1 mb-2">Create an account? <Link to="/register">Sign-Up</Link></p>
          </div>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}

export default Login;