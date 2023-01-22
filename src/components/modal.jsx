import '../assets/modal.css';

import AddHabits from './sub-components/AddHabits';
import EditHabit from './sub-components/EditHabit';

export default function ModalComponent({isClicked, clickHandler}){
    function exitHandler(e){
        clickHandler({isClicked: false, value: "", elemObject: null});
        e.stopPropagation();
    }
    return (
        <div className={isClicked ? 'modal-background modal-container' : 'modal-background display-none'}>
            <div className='modal-box-content'>
                <div className='modal-title-bar'>
                    <h2>{isClicked.value == "Add" && "Add a Habit"}{isClicked.value == "Edit" && "Edit a Habit"}</h2>
                    <button onClick={e=>exitHandler(e)} className="exit-css">X</button>
                </div>
                
                {isClicked.value == "Add" && <AddHabits clickHandler={clickHandler}/>}
                {isClicked.value == "Edit" && <EditHabit clickHandler={clickHandler} elemObject={isClicked.elemObject}/>}
            </div>
        </div>   
    )
}