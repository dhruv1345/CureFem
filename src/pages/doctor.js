import React from "react";
import Doctory from "./doctorbegins";
// import { Link } from "react-router-dom";

function Doctor(){
    return(
            <div className="page1">
                <h3 className='headings'>Doctor</h3><br />
                <img onClick={<Doctory/>} className='imagesPage1' src="newdoctor.jpg" alt="" width='350' height='250' /><br /><br />  
                <h3 className='captioning'>If you are a Doctor. Click Image.</h3>
            </div>     
    );
}

export default Doctor;