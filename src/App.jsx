import { useState } from 'react'
import HomePage from "./components/HomePage";
import React from "react";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import OwnerPage from "./components/OwnerPage.jsx";
import UserSec from "./components/UserSector.jsx";
import AdminSec from "./components/AdminSector.jsx";

function App() {
  const [employees, setEmployees] = useState([]);

  const [name, setName] = useState("");
  const [last, setLast] = useState("");
  const [position, setPosition] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(name)
    // console.log(last)
    // console.log(position)
    let employee = {
      name,
      last,
      position,
    };
    setEmployees([...employees, employee]);
    // เพิ่มแค่ให้ string เปล่า
    setName("");
    setLast("");
    setPosition("");
  };

  const deleteEmployee = (index) => {
    setEmployees(employees.filter((_, i) => i !== index));
    
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <Navbar />
          <HomePage />
        </div>
      ),
    },
    {
      path: "/User",
      element: (
        <div>
          <Navbar />
          <UserSec 
          employees={employees}
          />
        </div>
      ),
    },
    {
      path: "/Owner",
      element: <Navbar />,
      children: [
        {
          path: "",
          element: <OwnerPage />,
        },
      ],
    },
    {
      path: "/Admin",
      element: (
        <div>
          <Navbar />
          <AdminSec
            handleSubmit={handleSubmit}
            deleteEmployee={deleteEmployee}
            employees={employees}
            name={name}
            last={last}
            position={position}
            setName={setName}
            setLast={setLast}
            setPosition={setPosition}
          />
        </div>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;


