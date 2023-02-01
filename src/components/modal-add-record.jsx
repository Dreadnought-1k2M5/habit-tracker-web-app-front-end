import '../assets/modal.css';
import '../assets/modal-habit.css';
import { useState } from 'react';
import { useEffect } from 'react';
import Axios from 'axios';

export default function ModalAddComponent({modalState, clickHandler, submitState, setSubmitState}){
    let [minutesValueState, setMinutesValueState] = useState('');

    function exitHandler(e){
        clickHandler({isClicked: !modalState.isClicked, habitItem: {} });
    }
    function sendRecordHandler(){
        let minuteParseInt = parseInt(minutesValueState);
        if(isNaN(minuteParseInt)){
            alert("PLEASE ENTER A NUMBER");
            return 0;
        }            
        Axios.post('http://localhost:8080/add-record-habit', {minutesValueState: minutesValueState, modalState}).then( (response)=>{
            console.log(response);
            if(response.data){
                clickHandler({isClicked: !modalState.isClicked, habitItem: {} });
                setSubmitState(!submitState);
            }
        });
    }

    useEffect(()=>{
        console.log("HEREEEEE");
        console.log(modalState);
    }, [])

    return (
        <div className={modalState.isClicked ? 'modal-background modal-container' : 'modal-background display-none'}>
            <div className='modal-box-content modal-habit-add-box'>
                <div className='modal-title-bar'>
                    <h3>Add Record - {modalState.habitItem.habit_name}</h3>
                    <button onClick={e=>exitHandler(e)}className="exit-css">X</button>
                </div>
                
                <div className='modal-habit-content'>
                    <p>Each entry for this habit earns you 1 point.</p>
                    <input type="text" placeholder='Minutes Spent' onChange={(e)=>{setMinutesValueState(e.target.value); e.stopPropagation();}} className="modal-habit-textbox-css" />
                </div>

                <div className='div-btn-box'>
                    <button onClick={sendRecordHandler} className='btn-add-record-class'>Add Record</button>
                </div>
                
            </div>
        </div>
    )
}