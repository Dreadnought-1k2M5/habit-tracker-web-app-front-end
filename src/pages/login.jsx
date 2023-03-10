import { useEffect, useState } from 'react';
import Axios from 'axios';
import '../assets/login-page.css';
import { useNavigate } from 'react-router-dom';

export default function LoginPage(){
    let [username, setUsername] = useState('');
    let [password, setPassword] = useState('');
    let Navigate = useNavigate();

 
    Axios.defaults.withCredentials = true;

    useEffect(()=>{
        Axios.get("http://localhost:8080/", {isAuthenticated: null}).then((response)=>{
            if(response.data.isAuthenticated){
                Navigate('main');
            }
            else{
                console.log("FALSE");
            }
        })
    }, []);

    function SubmitHandler(e, route){
        e.stopPropagation();
        Axios.post(`http://localhost:8080/${route}`, {
            username: username,
            password: password
        }).then((response)=>{
            switch(route){
                case 'login':
                    if(response.data.isAuthenticated){
                        Navigate('main');
                    }else{
                        alert("TRY AGAIN!!");
                    }
                    break;
                case 'register':
                    console.log(response.data);
                    break;
            }

        })
    }

    return (
        <div className="top-login-container" >
            <div className='form-login'>
                <div className='input-box'>
                    <p>Username: </p>  
                    <input type="text" value={username} onChange={(e)=> setUsername(e.target.value)}  name="username" required />  
                </div>
                <div className='input-box'>
                    <p>Password: </p>  
                    <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} name="username" required />  
                </div>
                <div className='btn-container'>
                    <input type="submit" className='btn-login' value="Login" onClick={(e)=> SubmitHandler(e, 'login')}/>
                    <button className='btn-register' onClick={(e)=> SubmitHandler(e, 'register')}>Register</button>
                </div>
            </div>
        </div>
    )
}