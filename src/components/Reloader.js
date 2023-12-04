import {useEffect} from 'react';
import {useLocation, useNavigate} from "react-router-dom";

function Reloader(){
    let navigate = useNavigate();
    const {state} = useLocation();
    useEffect(()=>navigate(state.route));
}

export default Reloader;