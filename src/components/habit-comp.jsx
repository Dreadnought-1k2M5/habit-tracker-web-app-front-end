import '../assets/habits-comp.css'
export default function HabitComponent(){
    return (
        <div className="habits-container">
            <div className='habits-container-box1'>
                <button className='add-btn-css'>Add habit</button>
            </div>

            <div className='habits-container-box2'>
                <ul className='habits-container-list-habits'>
                    <li>
                        <div className='habit-item'>
                            <div className='habit-title-box'>
                                <p>lorem20</p>
                            </div>

                            <div className='btn-boxes'>
                                <button className='edit-btn-css'>Edit</button>
                                <button className='remove-btn-css'>Remove</button>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>

        </div>
    )
}