import "./info.css"

export default function UserComponent(props){
    return (
        <div className="user-info">
            <h1>First Name: {props.firstName}</h1>
            <h1>Last Name: {props.lastName}</h1>
            <h1>Age: {props.age}</h1>
        </div>
    )
}