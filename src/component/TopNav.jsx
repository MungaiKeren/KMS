import React from "react";
// import logo from '../assets/Images/logo.png';
// import kms from "../assets/Images/kms.png";
import kmsLogo from "../assets/Images/kmslogo.png"
import {MdPhone, MdMailOutline} from "react-icons/md";

export function TopNav(){

    return (
        <div className="TopNav">
            <div className="left">
                <img src={kmsLogo} alt="logo icon" />
            </div>
            <hr />
            <div className="right">
                <div className="contact-info">
                    <span>
                        <MdPhone size={20} /> &nbsp; 0706 367 488
                    </span> <br />
                    <MdMailOutline size={20}/> &nbsp;
                   <span className="mailInfo">info@kenyamachineryservices</span>
                </div>
            </div>
        </div>
    )

}

export default TopNav;