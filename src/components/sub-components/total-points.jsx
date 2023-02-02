import '../../assets/total-boxes.css';

export default function TotalRoutineFinished({totalPoints}){
    return (
        <div className='total-box-container total-routine-box'>
            <div className='desc-box'>
                <h3>Total Points:</h3>
                <p>Total number of completed routine overall.</p>
            </div>
            <div className='total-box'>
                <p className='total-points-css'>{totalPoints}</p>
                <p>Points</p>
            </div>
        </div>
    )
}