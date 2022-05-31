import React from "react";

export function Navigation(props){

    return (
        <div className="navigation">
            <div className="right">
                <img src="{}" alt="logo" height="50px" width="50px" />
                <h4>Kenya Machinery Services</h4>
            </div>
            <div className="left">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Services</li>
                    <li>Contact Us</li>
                </ul>

            </div>
        </div>
    )

}

export default Navigation;