import React from "react";
import "./CSS/doctorpage.css";
import vidVirus from "../assets/city.mp4";


function Doctory(){
    return(
        <div className="wrapping">
            <div className="mainSection">
                <video className="cityVideo" src={vidVirus} autoPlay loop muted></video>
            </div>
            <div className="contentdoc">
                <h2>Be the Dr. who can change the lives of Women</h2>
            </div>
        </div>

    );
}

export default Doctory;