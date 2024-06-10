import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from './components/Navbar.jsx';
import OwnerPage from './components/OwnerPage.jsx';
import UserSec from './components/UserSector.jsx';
import AdminSec from './components/AdminSector.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        path: "",
        element: <App />,
      },
    ],
  },
  {
    path: "/owner",
    element: <Navbar />,
    children: [
      {
        path: "",
        element: <OwnerPage />,
      },
    ],
  },
  {
    path: "/user",
    element: <Navbar />, 
    children: [
      {
        path: "",
        element: <UserSec />,
       
      },
      
    ],
  },
  {
    path: "/admin",
    element: <Navbar />,
    children: [
      {
        path: "",
        element: <AdminSec />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
);