import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from './components/OwnerPage.jsx';
import OwnerPage from './components/OwnerPage.jsx';
import UserSec from './components/UserSector.jsx';
import AdminSec from './components/AdminSector.jsx';


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);