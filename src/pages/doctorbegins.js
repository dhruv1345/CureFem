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

            <div className="secondsection">
                <div className="imaging">
                    <img className="imagation" src="thanks.jpg" alt="" />
                    <div className="h4AndSymbo">
                        <h4 className="h4image">Here's how you can help <br /> needy <span>Women</span></h4>
                        <p className="pimage">
                        <ul>
                            <li className="list">You can give live Consultancies.</li>
                            <li className="list">We can provide you platform to contact affected Women.</li>
                            <li className="list">You can help women by providing free Doctor Sessions.</li>
                        </ul>
                        </p>
                        <button className="button1">Click to See their Problems</button>
                    </div>

                </div>
            </div>
        </div>

    );
}

export default Doctory;