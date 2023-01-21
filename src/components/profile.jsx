import '../assets/profile.css';

export default function Profile(){
    return (
        <div className="profile-container">
            <div className='profile-box'>
                <div className='profile-item1'>
                    <div>
                        <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" className='img-profile' alt="" />
                    </div>
                    <div>
                        <h3>Joshua Lumanog</h3>
                        {/* <p>Total to-do tasks finished: </p> */}
                    </div>
                </div>
{/*                 <div className='profile-item2'>

                </div> */}

            </div>
        </div>
    )
}