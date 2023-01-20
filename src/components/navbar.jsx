import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

import '../assets/navbar.css';


export default function Navbar({username}){
    let Navigate = useNavigate();

    Axios.defaults.withCredentials = true;
    function LogoutHandler(e){
        e.stopPropagation();
        Axios.get('http://localhost:8080/logout').then((response)=>{
            if(response.data){
                Navigate('/');
            }
        })
    }
    return(
        <nav className='navbar'>
            <div>
                <h1>Habit Tacker App </h1>
            </div>
            <div className='user-bar-box'>
                <p>Welcome, {username}</p>
                <button onClick={(e)=>LogoutHandler(e)}>Log Out</button>
            </div>    

        </nav>
    )
}