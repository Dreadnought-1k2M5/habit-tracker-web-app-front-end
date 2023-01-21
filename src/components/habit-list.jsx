import '../assets/habits-list.css'
export default function HabitList(){
    return (
        <div className="habits-listbox">
            <div className='habits-listbox-box1'>
                <button className='add-btn-css'>Add habit</button>
            </div>

            <div className='habits-listbox-box2'>
                <ul className='habits-listbox-list-habits'>
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