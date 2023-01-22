import { useState } from "react";
import Axios from "axios";

import '../../assets/component-layout-css/AddHabits.css';

export default function EditHabit({clickHandler, elemObject}){
    let [habit, setHabit] = useState('');
    function SubmitHabitHandler(e){
        Axios.post("http://localhost:8080/edit-habit", {habit, elemObject}).then((Response)=>{
            clickHandler({isClicked: false, value: "", elemObject: null});
        })
        e.stopPropagation();
    }
    return (
        <div className="parent-container">
            <div className="flex-item1">
                <div>
                    <p>Modify habit name: {elemObject.habit_data}</p>
                </div>

                <div className="form-container">
                    <input className="habit-textbox-css" type="text" value={habit.habitName} placeholder="Habit Name" onChange={(e)=>{ 
                            setHabit(e.target.value); e.stopPropagation();
                        }
                    }/>
                </div>
            </div>

            <div className="submit-container">
                <button className="add-habit-btn" onClick={(e)=> SubmitHabitHandler(e) }>Edit Habit</button>
            </div>
        </div>
    )
}