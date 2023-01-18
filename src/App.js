/* import logo from './logo.svg'; */
import './App.css';
import User from "./components/info";

const user = {
  firstName: "Joshua",
  lastName: "Lumanog"
}

function formatName(user){
  return `${user.firstName} ${user.lastName}`
}

function App() {
  return (
    <div className="App">
      <User firstName="Joshua" lastName="Lumanog" age="21"/>
    </div>
  );
}

export default App;
