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
                <button className={`${clickedState === 'profile' && 'btn-clicked'} btn-none`} onClick={(e)=> ClickHandler(e, 'profile')}>Profile</button>
            </div>
            {children}
        </div>
    )
}