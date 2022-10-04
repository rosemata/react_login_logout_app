import './index.css';
import Employee from './components/Employee';
import {useState} from 'react'
import {v4 as uuidv4} from 'uuid';
function App() {
  const [role,setRole] = useState('dev');
  const[employees, setEmployees] = useState(
    [
      {name:"Caleb", role: "CEO", img: "https://images.pexels.com/photos/164186/pexels-photo-164186.jpeg" },
      {name:"Abby", role: "Developer", img: "https://images.pexels.com/photos/245035/pexels-photo-245035.jpeg" },
      {name:"John", role: "Product Manager", img: "https://images.pexels.com/photos/2607544/pexels-photo-2607544.jpeg" },
      {name:"Ken", role: "Developer", img: "https://images.pexels.com/photos/1938126/pexels-photo-1938126.jpeg" },
      {name:"Lourie", role: "Developer", img: "https://images.pexels.com/photos/4668425/pexels-photo-4668425.jpeg" },
      {name:"Jess", role: "UI/UX", img: "https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg" },
      {name:"Faye", role: "QA Test", img: "https://images.pexels.com/photos/1458925/pexels-photo-1458925.jpeg"},
      {name:"Ann", role: "Developer", img: "https://images.pexels.com/photos/540524/pexels-photo-540524.jpeg"}
    ]
  )

  const showEmployees = true;
  return (
    <div className="App ">
      {showEmployees ? (
        <>
          <input
            type="text"
            onChange = {(e) => {
              console.log(e.target.value);
              setRole(e.target.value)
            }}
          />
          <div className="flex flex-wrap justify-center">
            {employees.map((employee) => {
              return ( <Employee 
                key={uuidv4()}
                name={employee.name} 
                role = {employee.role} 
                img = {employee.img}
              />);
            })}
          </div>
         </>
      ) : (
        <p>You cannot see the employees</p>
      )}

    </div>
  );
}

export default App;
