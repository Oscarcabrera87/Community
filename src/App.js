import Employee from "./components/Employee"

function App() {
  const showEmployees = true
  return (
    <div className="App">
      {showEmployees ?
      <>
       <Employee name="Caleb" role="intern"/>
       <Employee name="Jacob" />
       <Employee name="Mark" role="intern"/>
       <Employee name="Samantha" role="Admin"/>
       </>
       : <p>
        You can not see the employees
       </p>
      }
    </div>
  );
}

export default App;
