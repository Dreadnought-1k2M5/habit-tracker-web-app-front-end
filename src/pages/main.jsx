import Axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from '../components/navbar';

import '../assets/main.css';


function Main(){
    let [username, setUsername] = useState('');

    let Navigate = useNavigate();
    
    Axios.defaults.withCredentials = true;
    
   
    useEffect(()=>{
        Axios.get('http://localhost:8080/', {isAuthenticated: null}).then((response)=>{
            if(response.data.isAuthenticated){
                setUsername(response.data.userProp);
            }else{
                alert('Cookie has expired. Log in again.');
                Navigate('/');
            }
        })
    }, []);

    return (
        <div className="top-main-container">
            <Navbar username={username}/>
        </div>
    )
}

export default Main;