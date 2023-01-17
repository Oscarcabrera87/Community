import './App.css';
import Employee from "./components/Employee";
import { useState } from "react";

function App() {
  const [role, setRole] = useState('dev')
  const showEmployees = true
  
  return (
    <div className="App">
      {showEmployees ?
      <>
      <input
        type='text'
        onChange={(e) => {
          console.log(e.target.value)
          setRole(e.target.value)
        }} 
      />
      <div className="flex flex-wrap justify-center">
       <Employee name="Caleb" role="intern"/>
       <Employee name="Jacob" />
       <Employee name="Mark" role={role}/>
       <Employee name="Samantha" role="Admin"/>
       <Employee name="Jacob" />
       <Employee name="Mark" role={role}/>
       <Employee name="Samantha" role="Admin"/>
       <Employee name="Jacob" />
       <Employee name="Mark" role={role}/>
       <Employee name="Samantha" role="Admin"/>
       </div>
       </>
       : <p>
        You can not see the employees
       </p>
      }
    </div>
  );
}

export default App;
