import Axios from "axios";
import { useEffect, useState } from "react";

function Main(){
    let [username, setUsername] = useState('');
    
    Axios.defaults.withCredentials = true;
    
    useEffect(()=>{
        Axios.get('http://localhost:8080/', {isAuthenticated: null}).then((response)=>{
            if(response.data.isAuthenticated){
                setUsername(response.data.userProp);
            }
        })
    }, []);
    
    return (
        <div className="top-main-container">
            <div className="navbar">
                <h3>Habit Tracker App - Welcome, {username}</h3>
            </div>
        </div>
    )
}

export default Main;