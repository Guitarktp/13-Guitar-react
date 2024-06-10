// import { useState } from "react";
// import { useEffect } from "react";

import { useState } from "react"
// import { Form } from "react-router-dom"

function AdminSec() {

    const [employees, setEmployees] = useState([])

    const [name, setName] = useState('')
    const [last, setLast] = useState('')
    const [position, setPosition] = useState('')
    

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name)
        console.log(last)
        console.log(position)
        let employee={
            name,
            last,
            position,
        };

        setEmployees([...employees,employee]);

        // เพิ่มแค่ให้ string เปล่า
        setName("");
        setLast("");
        setPosition("");
      };
 

    return (
      <div className="flex flex-col justify-center items-center ">
        <h1 className='font-bold text-[48px] mt-12'>
            Generation Thailand<br />
            React - AdminSector
        </h1>  
        <h2>
            Create User Here
        </h2>

        <form onSubmit={handleSubmit}>
            <input placeholder="Name" type='text' onChange={(e) => setName(e.target.value)} value={name}/>
            <input placeholder="Last Name" type='text' onChange={(e) => setLast(e.target.value)} value={last}/>
            <input placeholder="Position" type='text' onChange={(e) => setPosition(e.target.value)} value={position}/>
            <button type="submit">save</button>

        </form>

        <table >
          <thead >
            <tr >
                <th>Name</th>
                <th>Last Name</th>
                <th>Position</th>
                <th>Action</th>
            </tr>
          </thead>

          <tbody>
          {employees.map((employee, index) => (
            <tr key={index}>
                <td>{employee.name}</td>
                <td>{employee.last}</td>
                <td>{employee.position}</td>
                <td><button className="text-red-500">Delete</button></td>
            </tr>
            ))}
          </tbody>


        </table>
      </div>
     
    )
  }
    
    
    
export default AdminSec