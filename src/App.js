import './App.css';
import Employee from "./components/Employee";
import { useState } from "react";


function App() {
  const [employees, setEmployees] = useState (
    [
      {
        id: 1,
        name: "Caleb",
        role: "Intern",
        img: "https://images.pexels.com/photos/3748221/pexels-photo-3748221.jpeg?auto=compress&cs=tinysrgb&w=1600",
      },
      {
        id: 2,
        name: "Mark",
        role: "IT",
        img: "https://images.pexels.com/photos/1840608/pexels-photo-1840608.jpeg?auto=compress&cs=tinysrgb&w=1600",
      },
      {
        id: 3,
        name: "Sally",
        role: "Admin",
        img: "https://images.pexels.com/photos/2846602/pexels-photo-2846602.jpeg?auto=compress&cs=tinysrgb&w=1600",
      },
      {
        id: 4,
        name: "Jon",
        role: "Literary",
        img: "https://images.pexels.com/photos/3220360/pexels-photo-3220360.jpeg?auto=compress&cs=tinysrgb&w=1600",
      },
      {
        id: 5,
        name: "Oscar",
        role: "CEO",
        img: "https://images.pexels.com/photos/2530775/pexels-photo-2530775.jpeg?auto=compress&cs=tinysrgb&w=1600",
      },
      {
        id: 6,
        name: "Betty",
        role: "ED",
        img: "https://images.pexels.com/photos/1982852/pexels-photo-1982852.jpeg?auto=compress&cs=tinysrgb&w=1600",
      },
      {
        id: 7,
        name: "Hortencia",
        role: "Ads Director",
        img: "https://images.pexels.com/photos/4993292/pexels-photo-4993292.jpeg?auto=compress&cs=tinysrgb&w=1600",
      },
      {
        id: 8,
        name: "Wong",
        role: "HR",
        img: "https://images.pexels.com/photos/4662950/pexels-photo-4662950.jpeg?auto=compress&cs=tinysrgb&w=1600",
      },
      {
        id: 9,
        name: "Jeng",
        role: "Membership",
        img: "https://images.pexels.com/photos/4750165/pexels-photo-4750165.jpeg?auto=compress&cs=tinysrgb&w=1600",
      },
    ]
  )

  function updateEmployee(id, newName, newRole){
    const updatedEmployees = employees.map((employee) => {
      if (id === employee.id) {
        return {...employee, name: newName, role: newRole}
      }
      return employee
    })
    setEmployees(updatedEmployees)
  }

  const showEmployees = true
  
  return (
    <div className="App">
      {showEmployees ?
      <>
      <div className="flex flex-wrap justify-center m-12">
        {employees.map((employee) => {
            console.log(employee)
          return ( 
            <Employee 
              key={employee.id}
              id={employee.id}
              name={employee.name}
              role={employee.role}
              img={employee.img}
              updateEmployee={updateEmployee}
            /> )
        })}
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
