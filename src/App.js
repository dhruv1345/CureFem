import './App.css';
import Patient from "./pages/patient";
import Doctor from './pages/doctor';
// import Register from './pages/patientbegins';
import Organization from './pages/organization';
// import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="total">
      <div className="head">
        CureFem
      </div>
      <div className="wrapper">
        <Doctor />
        <Patient />
        <Organization />
      </div>
    </div>
     
  );
}

export default App;
