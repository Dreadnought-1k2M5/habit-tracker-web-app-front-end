import { useState } from "react";
import Axios from "axios";

import '../../assets/component-layout-css/AddHabits.css';

export default function AddHabits({submitState, setSubmitState, clickHandler}){
    let [habit, setHabit] = useState({habitName: ''});
    function SubmitHabitHandler(e){
        Axios.post("http://localhost:8080/add-habit", {data: habit.habitName}).then((Response)=>{
            clickHandler({isClicked: false, value: "ADDED"});
            setSubmitState(!submitState);
        })
        e.stopPropagation();
    }
    return (
        <div className="parent-container">
            <div className="flex-item1">
                <div>
                    <p>Set the habit you want to keep track of:</p>
                </div>

                <div className="form-container">
                    <input className="habit-textbox-css" type="text" value={habit.habitName} placeholder="Habit Name" onChange={(e)=>{ 
                            setHabit({habitName: e.target.value}); e.stopPropagation();
                        }
                    }/>
                </div>
            </div>

            <div className="submit-container">
                <button className="add-habit-btn" onClick={(e)=> SubmitHabitHandler(e) }>Add Habit</button>
            </div>
        </div>
    )
}