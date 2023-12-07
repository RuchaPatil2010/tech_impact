import {useState} from "react";
import axios from "axios";
import {backend_url} from "../utils/constants";
import {useNavigate} from "react-router-dom";

const ForgotPassword = () => {
    const [username,setUsername] = useState('');
    const [code,setCode] = useState(0);
    let navigate = useNavigate();

    const handleUsername = (e)=>{
        setUsername(e.target.value);
    }
    const handleCodeRequest = ()=>{
        axios.get(backend_url+'/users/request_code',{params:{username:username}});
    }

    const handleCode = (e)=>{
        setCode(e.target.value);
    }

    const handleSubmit = ()=>{
        axios.get(backend_url+'/users/forgot_password',{params:{username:username,code:code}}).then(r=> {
            if(r.status === 200) navigate('/login');
        });
    }

    return (<div>
        <h4>Kindly enter your username here and you will get an email with a code. Please enter the code here and click submit to get a new password.</h4>
        <input name="username" onChange={handleUsername} placeholder='username'/>
        <button onClick={handleCodeRequest}>Continue</button>
        <div>
            <p>Enter code here</p>
            <input name="code" onChange={handleCode} placeholder="Enter code here"/>
            <button type='submit' onClick={handleSubmit}>SUBMIT</button>
        </div>
    </div>)
}

export default ForgotPassword;