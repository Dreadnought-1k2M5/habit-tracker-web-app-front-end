import '../assets/habitsComponent.css';

export default function HabitComponent({children}){
    return (
        <div className="habit-component">
            {children}
        </div>
    )
}