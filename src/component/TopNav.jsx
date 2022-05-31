import React from "react";
import logo from '../assets/Images/logo.jpg';

export function TopNav(){

    return (
        <div className="TopNav">
            <div className="left">
                <img src="{logo}" alt="logo icon" />
                <p>Kenya Machinery Services</p>
            </div>
            <div className="right">
                <div className="contact-info">
                    <h4>0706 367 488</h4>
                    <img src="" alt="whatsappicon" />
                </div>
            </div>
        </div>
    )

}

export default TopNav;