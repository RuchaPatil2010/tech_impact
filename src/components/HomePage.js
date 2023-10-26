import React           from 'react';
import logo            from '../images/tech_impact.png';
import volunteer       from '../images/volunteer.jpeg';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  
  let navigate = useNavigate();
  
  return (
    <div>
      <header>
        <center>
          <img src={ logo } alt="Logo" />
        </center>
      </header>

      <main>
        <center>
            {/* Add Login Button */}
            <button 
              type="button"
              onClick={() => {navigate('/login')}}
              style={{ 
                  paddingRight    : '30px', 
                  paddingLeft     : '30px',
                  paddingTop      : '7px', 
                  paddingBottom   : '7px',
                  marginRight     : '10%',
                  backgroundColor : 'hsla(208, 58%, 94%, 1)',
                  borderRadius    : '15px',
                  border          : 'none',
                  cursor          : 'pointer',
              }} 
            >
              Login
            </button>

            {/* Add SignUp Button */}
            <button 
              type="button" 
              onClick={() => {navigate('/register')}}
              style={{
                  paddingRight    : '30px', 
                  paddingLeft     : '30px',
                  paddingTop      : '7px', 
                  paddingBottom   : '7px', 
                  backgroundColor : 'hsla(208, 58%, 94%, 1)',
                  borderRadius    : '15px',
                  border          : 'none',
                  cursor          : 'pointer',
              }}
            >
              Sign Up to <br></br> Volunteer with us
            </button>

        </center>

        <center>
          <img src={ volunteer } 
               alt="Volunteer" 
               width="70%" 
               height="auto" />
        </center>
      </main>
    </div>
  );
}

export default HomePage;