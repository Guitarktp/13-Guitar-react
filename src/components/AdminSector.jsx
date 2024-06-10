
// import { useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
// import { useState } from "react"



const AdminSec = ({
  handleSubmit,
  deleteEmployee,
  employees,
  name,
  last,
  position,
  setName,
  setLast,
  setPosition,
}) => {


    return (
      <div className="flex flex-col justify-center items-center ">
        <h1 className='font-bold text-[48px] mt-12'>
            Generation Thailand<br />
            React - AdminSector
        </h1>  

        <div className="my-4"> 
          <button className="rounded-lg shadow-md px-4 py-2">
            <Link to="/user">
                User
            </Link>
          </button>
          <button className="rounded-lg shadow-md px-4 py-2">
            <Link to="/admin">
                Admin
            </Link>
          </button>
        </div>


        <h2>
            Create User Here
        </h2>

        <form className="bg-blue-200 px-4 py-6 m-6 rounded-lg" onSubmit={handleSubmit}>
            <input placeholder="Name" type='text' onChange={(e) => setName(e.target.value)} value={name}/>
            <input placeholder="Last Name" type='text' onChange={(e) => setLast(e.target.value)} value={last}/>
            <input placeholder="Position" type='text' onChange={(e) => setPosition(e.target.value)} value={position}/>
            <button type="submit" className="rounded-lg shadow-md px-4 py-2">save</button>

        </form>
        


        <table className="table-auto h-36 divide-y divide-gray-200 w-full">
          <thead className="bg-gray-50 ">
            <tr className="text-xs font-medium  uppercase text-center">
                <th>Name</th>
                <th>Last Name</th>
                <th>Position</th>
                <th>Action</th>
            </tr>
          </thead>

          <tbody >
          {employees.map((employee, index) => (
            <tr className="text-center" key={index}>
                <td>{employee.name}</td>
                <td>{employee.last}</td>
                <td>{employee.position}</td>
                <td><button className="text-red-500" onClick={() => deleteEmployee(index)}>Delete</button></td>
            </tr>
            ))}
          </tbody>


        </table>
        <Outlet />
      </div>
     
    )
  }
    
    
    
export default AdminSec