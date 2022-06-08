import React from "react";
import logo from '../assets/Images/logo.png';

export function TopNav(){

    return (
        <div className="TopNav">
            <div className="left">
                <img src={logo} alt="logo icon" />
            </div>
            <div className="right">
                <div className="contact-info">
                    <h4>
                        <i className="fas fa-phone"></i> &nbsp;
                        0706 367 488 / 0719
                    </h4>
                    <i className="fab fa-whatsapp-square"></i>
                </div>
            </div>
        </div>
    )

}

export default TopNav;