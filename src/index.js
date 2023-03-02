import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import Register from "../src/pages/patientbegins";
import reportWebVitals from './reportWebVitals';
import Doctory from './pages/doctorbegins';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Register /> */}
    <Doctory />
  </React.StrictMode>
);

reportWebVitals();
