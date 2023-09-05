import './App.css'
// import AxiosPut from './Pages/AxiosPut/AxiosPut';

// import Login from './Pages/Login';
// import Register from './Pages/Register'
// import NavBar from './Pages/Home/NavBar';
import Dashboard from './Pages/Dashboard';
import * as React from "react";

// import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  // Route,
  // Link,
} from "react-router-dom";
// import Fetch from './Pages/Fetch/Fetch';
// import Axios from './Pages/Axios/Axios';


const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <NavBar/>
  // },
  // {
  //   path: "/register",
  //   element: <Register/>
  // },
  // {
  //   path: "/login",
  //   element: <Login/>
  // },
  {
    path: "/",
    element: <Dashboard/>
  },
  // {
  //   path: "/",
  //   element: <Fetch/>
  // },
  //   {
  //   path: "/",
  //   element: <Axios/>
  // },
  // {
  //   path: "/",
  //   element:<AxiosPut/>
  // }

]);


function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App