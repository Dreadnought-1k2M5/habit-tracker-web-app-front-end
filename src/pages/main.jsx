import Axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from '../components/navbar';
/* import Profile from "../components/profile"; */
import TabComponent from "../components/TabComponent";
import HabitList from "../components/sub-components/habit-list";

import '../assets/main.css';
import HabitComponent from "../components/HabitComponent";
import PanelStat from "../components/sub-components/panel-stat";


function Main(){
    let [username, setUsername] = useState('');
    let [activeTab, setActiveTab] = useState('habit');

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
            <TabComponent setActiveTab={setActiveTab}>
                {
                    activeTab === 'habit' && 
                    <HabitComponent>
                        <HabitList />
                        <PanelStat />
                    </HabitComponent>
                }
                
            </TabComponent>
        </div>
    )
}

export default Main;