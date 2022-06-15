import React from "react";
import logo from '../assets/Images/logo.png';
import {MdPhone, MdMailOutline} from "react-icons/md";

export function TopNav(){

    return (
        <div className="TopNav">
            <div className="left">
                <img src={logo} alt="logo icon" />
            </div>
            <div className="right">
                <div className="contact-info">
                    <h4>
                        <MdPhone /> &nbsp;
                        0706 367 488 / 0719
                    </h4>
                    <MdMailOutline size={20}/> &nbsp;
                   <span className="mailInfo">info@kenyamachineryservices</span>
                </div>
            </div>
        </div>
    )

}

export default TopNav;