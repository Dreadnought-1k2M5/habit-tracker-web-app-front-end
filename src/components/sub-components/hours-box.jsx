import '../../assets/total-boxes.css';

export default function TotalHoursComp({totalHours}){
    return (
        <div className='total-box-container total-hours-box'>
            <div className='desc-box'>
                <h3>Total Hours Spent:</h3>
                <p>Total hours spent.</p>
            </div>
            <div className='hour-box'>
                <p className='total-points-css'>{totalHours}</p>
                <p>Hours</p>
                
            </div>
        </div>
    )
}