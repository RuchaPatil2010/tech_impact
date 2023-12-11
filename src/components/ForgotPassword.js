import {useState} from "react";
import axios from "axios";
import {backend_url} from "../utils/constants";
import {useNavigate} from "react-router-dom";
import '../css/mix.css';

const ForgotPassword = () => {
    const [username, setUsername] = useState('');
    const [code, setCode] = useState(0);
    const [codeSent, setCodeSent] = useState();
    const sentMessage = <p style={{color: 'green'}}>The code has been sent to your registered email address</p>

    let navigate = useNavigate();

    const handleUsername = (e)=>{
        setUsername(e.target.value);
    }
    const handleCodeRequest = ()=>{
        axios.get(backend_url+'/users/request_code',{params:{username:username}});
        setCodeSent('Code Sent')
    }

    const handleCode = (e)=>{
        setCode(e.target.value);
    }

    const handleSubmit = ()=>{
        axios.get(backend_url+'/users/forgot_password',{params:{username:username,code:code}}).then(r=> {
            if(r.status === 200) navigate('/login');
        });
    }

    return (
        <>
        <section>
            <div className="form_data">
                <div className="form_heading">
                    <h1>Reset Password</h1>
                </div>
                <form>
                    <div className="form_input">
                    <p>Kindly enter your username here and click "Generate Code" and you will get an email with a code. Please enter the code here and click submit to get a new password.</p>
                        <label htmlFor="username">Username</label>
                        <input type="text" onChange={handleUsername} name="username" id="username" placeholder='Enter your Username' />
                        {codeSent ? sentMessage : null}
                        <button className='code-btn' onClick={handleCodeRequest}>Generate Code</button>
                        <br />
                        <br />
                        <br />
                        <label htmlFor="code">Code</label>
                        <input type="text" onChange={handleCode} name="code" id="code" placeholder='Enter the code here' />
                    </div>

                    <button className='btn' onClick={handleSubmit}>Submit</button>
                </form>
            </div>
        </section>
    </>
    )
}

export default ForgotPassword;