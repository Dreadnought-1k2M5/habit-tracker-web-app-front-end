import { useState } from 'react';
import '../assets/login-page.css';

export default function LoginPage(){
    let [username, setUsername] = useState('');
    let [password, setPassword] = useState('');

    return (
        <div className="top-login-container">
            <form className='form-login'>
                <div className='input-box'>
                    <p>Username: </p>  
                    <input type="text" value={username} onChange={(e)=> setUsername(e.target.value)}  name="username" required />  
                </div>
                <div className='input-box'>
                    <p>Password: </p>  
                    <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} name="username" required />  
                </div>
                <div className='btn-container'>
                    <button className='btn-login'>Login</button>
                    <button className='btn-register'>Register</button>
                </div>
            </form>
        </div>
    )
}