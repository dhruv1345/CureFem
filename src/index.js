import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import Doctor from './pages/doctor';
import App from './App';

import Register from "../src/pages/patientbegins";
import reportWebVitals from './reportWebVitals';
// import Doctory from './pages/doctorbegins';
import Doctor from './pages/doctor';

// import React, { Component } from 'react';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import Doctory from './pages/doctorbegins';

const router = createBrowserRouter([
  {
    path: "/",
    element:<App />,
  },
  {
    path: "Patient",
    element: <Register/>,
  },
  {
    path: "Doctor",
    element: <Doctor/>,
  },
  {
    path: "Org",
    element: <h1>Organizations to be added</h1>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Register /> */}
    {/* <Doctory /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
