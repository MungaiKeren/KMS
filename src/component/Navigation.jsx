import React from "react";
import BottomNav from "./BottomNav";
import TopNav from "./TopNav";

export function Navigation(props){

    return (
        <>
        <TopNav />
        <div className="navigation">
            <div className="right">
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
        <BottomNav />
        </>
    )

}

export default Navigation;