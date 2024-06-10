import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from './components/Layout.jsx';
import OwnerPage from './components/OwnerPage.jsx';
import UserSec from './components/UserSector.jsx';
import AdminSec from './components/AdminSector.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <App />,
      },
    ],
  },
  {
    path: "/owner",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <OwnerPage />,
      },
    ],
  },
  {
    path: "/user",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <UserSec />,
      },
    ],
  },
  {
    path: "/admin",
    element: <Layout />,
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
);