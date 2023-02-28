import './App.css';
import Patient from "./pages/patient";
import Doctor from './pages/doctor';
import Organization from './pages/organization';

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
