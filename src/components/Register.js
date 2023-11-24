import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import registerImage from '../images/register-volunteer.jpg';
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import axios from "axios";
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
//import '../css/Register.css';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBRow,
  MDBCol,
  MDBCheckbox,
  MDBTextArea
}
    from 'mdb-react-ui-kit';
    import {backend_url} from "../utils/constants";

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

    // const handleContact = (event) => {
    //     setContact(event.target.value);
    // }

    const handleContact = (value) => {
        setContact(value);
    }

    const handleAddress = (event) => {
        setAddress(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        axios.post(backend_url+'/users/register', {
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
    <MDBContainer fluid className='my-5'>

      <MDBRow className='g-0 align-items-center'>
        <MDBCol col='6'>

          <MDBCard className='my-5 cascading-right' style={{background: 'hsla(0, 0%, 100%, 0.55)',  backdropFilter: 'blur(30px)'}}>
            <MDBCardBody className='p-5 shadow-5 text-left'>

              <h3 className="fw-bold mb-5 text-center">Sign up to become a Volunteer with us!</h3>

              <MDBRow>
                <MDBCol col='6'>
                  <MDBInput wrapperClass='mb-4' label='Name' style={{"text-align":"left"}} placeholder='Enter your name here' onChange={handleName} id='form1' type='text'/>
                </MDBCol>

                <MDBCol col='6'>
                  {/* <MDBInput wrapperClass='mb-4' label='Phone' onChange={handleContact} id='form2' type='tel'/> */}
                  <PhoneInput className="number" country={"us"} value={contact} onChange={handleContact} id='form2' type='tel' />
                    Phone Number
                </MDBCol>
              </MDBRow>

              <MDBTextArea wrapperClass='mb-4' placeholder="Enter your complete address here" label='Address' onChange={handleAddress} id='form4' rows={3} type='text'/>

              <MDBRow>
                <MDBCol col='6'>
                    <MDBInput wrapperClass='mb-4' placeholder="Enter your email ID here" label='Email' onChange={handleEmail} id='form3' type='email'/>
                </MDBCol>

                <MDBCol col='6'>
                    <MDBInput wrapperClass='mb-4' placeholder="Choose your username (Login ID)" label='Username' onChange={handleUsername} id='form5' type='text'/>
                </MDBCol>
              </MDBRow>

              <MDBRow>
                <MDBCol col='6'>
                    <MDBInput wrapperClass='mb-4' placeholder='Choose a strong password' label='Password' onChange={handlePassword} id='form5' type='password'/>
                </MDBCol>

                <MDBCol col='6'>
                    <MDBInput wrapperClass='mb-4' placeholder='Re-enter the password' label='Re-enter Password' onChange={handleRepassword} id='form6' type='password'/>
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
            <Button wrapperClass='w-100 mb-4' onClick={handleSubmit} size='lg'>Sign Up</Button>
            <div className="text-center">
            <p className="small fw-bold mt-2 pt-1 mb-2">Already have an account? <Link to="/login">Login</Link></p>
            </div>
          </MDBCard>
        </MDBCol>

        <MDBCol col='6'>
          <img src={registerImage} class="w-100 rounded-4 shadow-4"
            alt="" fluid/>
        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}

export default Register;