import '../assets/habits-comp.css'
export default function HabitComponent(){
    return (
        <div className="habits-container">
            <div className='habits-container-box1'>
                <a href='#'>Add habit</a>

            </div>

            <div className='habits-container-box2'>
                <ul className='habits-container-list-habits'>
                    <li>
                        <div className='habit-item'>
                            <p>habit 1</p>
                            <div>
                                <button>Edit</button>
                                <button>Remove</button>
                            </div>
                        </div>
                    </li>

                </ul>
            </div>

        </div>
    )
}