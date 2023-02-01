import Axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from '../components/navbar';
/* import Profile from "../components/profile"; */
import TabComponent from "../components/TabComponent";
import HabitList from "../components/sub-components/habit-list";

import '../assets/main.css';
import HabitComponent from "../components/HabitComponent";
import TotalRoutineFinished from "../components/sub-components/total-routine";
/* import HighScore from "../components/sub-components/high-score"; */
import TotalHoursComp from "../components/sub-components/hours-box";
import TableComponent from "../components/sub-components/table";


function Main(){
    let [username, setUsername] = useState('');
    let [activeTab, setActiveTab] = useState('habit');
    let [profileTotal, setProfileTotal] = useState({});
    let [tableState, setTableState] = useState([]);

    //This state is used to trigger a rerender when a new record for a habit is entered into the database
    let [submitState, setSubmitState] = useState(false);

    let Navigate = useNavigate();
    
    Axios.defaults.withCredentials = true;
    
   
    useEffect(()=>{
        Axios.get('http://localhost:8080/', {isAuthenticated: null}).then((response)=>{
            if(response.data.isAuthenticated){
                setUsername(response.data.userProp);
                setProfileTotal(response.data.totalValues);
                setTableState(response.data.tableResult)
            }else{
                alert('Cookie has expired. Log in again.');
                Navigate('/');
            }
        })

    }, [submitState]);

    return (
        <div className="top-main-container">
            <Navbar username={username}/>
            <TabComponent setActiveTab={setActiveTab}>
                {
                    activeTab === 'habit' && 
                    <HabitComponent>
                        <HabitList submitState={submitState} setSubmitState={setSubmitState}/ >
                        <TotalRoutineFinished totalPoints={profileTotal.total_points}/>
                        {/* <HighScore highScoreDay={profileTotal.high_score_day}/> */}
                        <TotalHoursComp totalHours={profileTotal.total_hours}/>
                        <TableComponent tableState={tableState}/>
                    </HabitComponent>
                }
                
            </TabComponent>
        </div>
    )
}

export default Main;