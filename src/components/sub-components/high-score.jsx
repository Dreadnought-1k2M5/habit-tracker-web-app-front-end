import '../../assets/total-boxes.css';

export default function HighScore({highScoreDay}){
    return (
        <div className='total-box-container high-score-box'>
            <div className='desc-box'>
                <h3>High Score:</h3>
                <p>The most tasks/routine you've completed in a day.</p>
            </div>
            <div className='number-box'>
                <p className='total-points-css'>{highScoreDay}</p>
                <p>Points</p>
            </div>
        </div>
    )
}