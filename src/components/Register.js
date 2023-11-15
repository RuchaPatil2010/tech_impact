import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import registerImage from '../images/register-volunteer.jpg';
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import axios from "axios";
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBInput,
    MDBIcon,
    MDBCheckbox,
    MDBTextArea
}
    from 'mdb-react-ui-kit';

function Register() {
    let navigate = useNavigate();

    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [contact, setContact] = useState();
    const [email, setEmail] = useState('');
    const [pass, setPassword] = useState('');
    const [address, setAddress] = useState('');
    const [repassword, setRepassword] = useState('');

    // Function to handle username
    const handleUsername = (event) => {
        setUsername(event.target.value);
    }

    // Function to handle Password
    const handlePassword = (event) => {
        setPassword(event.target.value);
    }

    const handleName = (event) => {
        setName(event.target.value);
    }

    const handleEmail = (event) => {
        setEmail(event.target.value);
    }

    const handleRepassword = (event) => {
        setRepassword(event.target.value);
    }

    const handleContact = (value) => {
        setContact(value);
    }
    const handleAddress = (event) => {
        setAddress(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        axios.post('http://localhost:8000/users/register', {
            username: username,
            password: pass,
            name: name,
            email: email,
            contact: contact,
            address: address,
            role: 'volunteer'
        })
            .then(response => navigate('/login'))
            .catch(err => console.log(err))
    }

    return (
        <MDBContainer fluid>
            <MDBCard className='text-black m-5' style={{ borderRadius: '25px' }}>
                <MDBCardBody>
                    <MDBRow>
                        <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
                            <MDBCardImage src={registerImage} fluid />
                        </MDBCol>

                        <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

                            <h4 classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4"><b>Sign up to become a Volunteer with us!</b></h4>

                            <MDBRow>
                
                                    <MDBInput wrapperClass='mb-4' label='Name' onChange={handleName} size='lg' id='form1' type='text' />
                      

                   
                                    {/* <MDBInput wrapperClass='mb-4' label='Phone Number' value={contact} onChange={handleContact} size='lg' id='form3' type='number'/> */}
                                    <PhoneInput className="number" country={"us"} value={contact} onChange={handleContact} id='form2' type='tel' />
                                    Phone Number
                        
                            </MDBRow>

                            <MDBRow>
        
                                    <MDBTextArea label='Address' onChange={handleAddress} id='form2' rows={4} />
           
                        
                                    <MDBInput wrapperClass='mb-4' label='Email' onChange={handleEmail} size='lg' id='form4' type='email' />
                      
                            </MDBRow>

                            <MDBRow>
                            
                                    <MDBInput wrapperClass='mb-4' label='Username' onChange={handleUsername} size='lg' id='form5' type='text' />
               
                               
                            </MDBRow>

                            <MDBRow>
                                <MDBCol md='6'>
                                <   MDBInput wrapperClass='mb-4' label='Re Enter Password' onChange={handleRepassword} size='lg' id='form7' type='password' />
                                </MDBCol>
                                <MDBCol md='6'>
                                    <MDBInput wrapperClass='mb-4' label='Password' onChange={handlePassword} size='lg' id='form6' type='password' />
                                </MDBCol>
                                
                            </MDBRow>

            
                                <Button wrapperClass='mb-4' onClick={handleSubmit} size='lg'>Register</Button>
                            

                            <p className="small fw-bold mt-2 pt-1 mb-2">Already have an account? <Link to="/login">Login</Link></p>
                        </MDBCol>
                    </MDBRow>
                </MDBCardBody>
            </MDBCard>
        </MDBContainer>
    );
}

export default Register;