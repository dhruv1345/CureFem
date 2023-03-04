import React from "react";
import './CSS/patientBegin.css';
import video from "../assets/bitchange.mp4";

function Register(){
    return(
        <div className="main">
            <video className="apniVideo" src={video} autoPlay loop muted />
            <div className="content">
                <div className="headerwala">
                    <h1 className="headingCont">Namaste Patient 😷 !</h1>
                </div>
                
                <br />
                
                <div className="form">
                    <div className="tableLeft">
                        <table>
                            <tr className="row"> 
                                <td><label className="label"  htmlFor="fname">First Name : </label></td>
                                <td><input className="inputing" type="text" name="fname" /></td> 
                            </tr>
                            <tr className="row"> 
                                <td><label className="label"  htmlFor="Lname">Last Name : </label></td>
                                <td><input className="inputing" type="text" name="Lname" /></td> 
                            </tr>
                            <tr className="row"> 
                                <td><label className="label"  htmlFor="City">City : </label></td>
                                <td><input className="inputing" type="text" name="City" /></td> 
                            </tr>
                            <tr className="row"> 
                                <td><label className="label"  htmlFor="country">Country : </label></td>
                                <td><input className="inputing" type="text" name="country" /></td> 
                            </tr>
                        </table>
                    </div>
                    <div className="tableRight">
                        <table>
                            {/* <tr>
                                <label className="label" htmlFor="NOFem">Females in family : </label>
                                <input className="inputing" type="number" name="NOFem" id="" />
                            </tr> */}
                            <tr className="row">
                                <td>
                                    <label className="label"  htmlFor="Disease">Symptoms : </label>
                                </td>
                                <td>
                                    <input className="inputing" type="text" name="Disease" />
                                </td>
                            </tr>
                            <tr className="row">
                                <td>
                                    <label className="label"  htmlFor="help">Help Needed ? : </label>
                                </td>
                                <td>
                                    <input className="inputing" type="text" name="help" />
                                </td>
                            </tr>
                            <tr className="row">
                                <td className="label">
                                    <label htmlFor="number">Contact : </label>
                                </td>
                                <td>
                                    <input className="inputing" type="number" name="number" id="" />
                                </td>
                            </tr>
                            <tr className="row">
                                <td></td>
                                <td><a href="https://www.womensweb.in/2018/07/women-doctors-in-india/" ><input className="button" type="button" value="Submit" /></a></td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;