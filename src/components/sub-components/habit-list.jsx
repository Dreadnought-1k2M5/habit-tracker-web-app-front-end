import { useReducer, useState } from 'react'

import ModalComponent from '../modal';
import ModalAddComponent from '../modal-add-record';

import '../../assets/habits-list.css';
import { useEffect } from 'react';

import Axios from "axios";



//This reducer handler will check if a habit_data cell is null - meaning there is no habit assigned 
function reducer(previousState, payload){
    let filteredList = payload.filter(elem => elem.habit_name != null); 
    console.log(filteredList);
    if(filteredList.length > 0){
        return filteredList;
    }else{
        return [];
    }
}

export default function HabitList({submitState, setSubmitState}){
    let [isModalClicked, setIsModalClicked] = useState({isClicked: false, value: ""});
    let [isHabitDeleted, setIsHabitDeleted] = useState(false);
    let [habitListState, dispatch] = useReducer(reducer, []);
    
    let [isModalHabitClicked, setIsModalHabitClicked] = useState({isClicked: false, habitItem: {}});
    

    function AddHabit(e, add){
        setIsModalClicked({isClicked: true, value: add});
        e.stopPropagation();
    }

    function EditHabit(e, edit, elemObject){
        setIsModalClicked({isClicked: true, value: edit, elemObject: elemObject});
        e.stopPropagation();
    }

    function RemoveHabit(e, elemObject){
        Axios.post('http://localhost:8080/remove-habit', elemObject).then(Response=>{
            setIsHabitDeleted(!isHabitDeleted);
            setSubmitState(!submitState);
        })
        e.stopPropagation();
    }

    useEffect(()=>{
        console.log(habitListState)
        console.log(`AXIOS CALLED: ${new Date().getTime()}`);
        Axios.get("http://localhost:8080/get-habits-list").then((Response)=>{
            console.log(Response.data)

            if(Response.data){
                dispatch(Response.data);
            }
        })
    }, [isModalClicked, isHabitDeleted, isModalHabitClicked]);

    return (
        <div className="habits-listbox">
            <div className='habits-listbox-box1'>
                <h3>My Habits</h3>
                <button className='add-btn-css' onClick={(e)=> AddHabit(e, "Add")}>Add habit</button>
            </div>

            <div className='habits-listbox-box2'>
                <ul className='habits-listbox-list-habits'>
                {
                        habitListState.map((elemObject, key) => 
                            <li key={`${elemObject.id_habit}-${key}`} onClick={(e)=> {setIsModalHabitClicked({isClicked: !isModalHabitClicked.isClicked, habitItem: elemObject}); e.stopPropagation();}}>
                                <div className='habit-item'>
                                    <div className='habit-title-box'>
                                        <p>
                                            <b>
                                                {elemObject.habit_name}
                                            </b>
                                        </p>
                                    </div>

                                    <div className='btn-boxes'>
                                        <button className='edit-btn-css' onClick={(e)=>EditHabit(e, "Edit", elemObject)}>Rename</button>
                                        <button className='remove-btn-css' onClick={(e)=>RemoveHabit(e, elemObject)}>Remove</button>
                                    </div>
                                </div>
                            </li>
                        )
                    }
                    
                </ul>
            </div>

            {(isModalClicked.isClicked && isModalClicked.value == "Add") && <ModalComponent submitState={submitState} setSubmitState={setSubmitState} isClicked={isModalClicked} clickHandler={setIsModalClicked} /> }
            {(isModalClicked.isClicked && isModalClicked.value == "Edit") && <ModalComponent submitState={submitState} setSubmitState={setSubmitState} isClicked={isModalClicked} clickHandler={setIsModalClicked} /> }  
            {(isModalHabitClicked.isClicked) && <ModalAddComponent modalState={isModalHabitClicked} clickHandler={setIsModalHabitClicked} submitState={submitState} setSubmitState={setSubmitState}/>}
        </div>
    )
}