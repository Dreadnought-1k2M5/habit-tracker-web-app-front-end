import { useState } from 'react'
import '../assets/tab-container.css'

export default function TabComponent({children, setActiveTab}){
    let [clickedState, setClickedState] = useState('habit');

    function ClickHandler(e, value){
        setActiveTab(value)
        setClickedState(value);
        e.stopPropagation();
    }
    return (
        <div className='tab-container'>
            <div className='tab'>
                <button className={`${clickedState === 'habit' && 'btn-clicked'} btn-none`} onClick={(e)=> ClickHandler(e, 'habit')}>Habits</button>
                <button className={`${clickedState === 'daily' && 'btn-clicked'} btn-none`} onClick={(e)=> ClickHandler(e, 'daily')}>Daily Routines</button>
                <button className={`${clickedState === 'todo' && 'btn-clicked'} btn-none`} onClick={(e)=> ClickHandler(e, 'todo')}>To Do List</button>
            </div>
            {children}
        </div>
    )
}