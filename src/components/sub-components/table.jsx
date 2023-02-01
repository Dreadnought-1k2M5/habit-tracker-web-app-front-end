import '../../assets/table.css';

export default function TableComponent({tableState}){
    return (
        <div className="table-box-container">
            <table>
                <thead>
                    <tr className='attributes-css'>
                        <th>ID</th>
                        <th>Habit</th>
                        <th>Points Gained</th>
                        <th>Minutes Spent</th>
                        <th>Created</th>
                        <th>Modified</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    tableState.map((elemObj, key)=>
                        <tr key={`${key}-${elemObj.id_habit}`}>
                            <td>{elemObj.id_habit}</td>
                            <td>{elemObj.habit_name}</td>
                            <td>{elemObj.habit_total_points} Pts</td>
                            <td>{elemObj.habit_total_minutes} Minutes</td>
                            <td>{elemObj.date_creation}</td>
                            <td>{elemObj.update_latest_date}</td>
                        </tr>
                    )}
                </tbody>

            </table>
        </div>
    )
}