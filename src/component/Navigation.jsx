import React from "react";



export function Navigation(props){

    return (
        <>
        <div className="navigation">
            <div className="right">
                <h4>Kenya Machinery Services</h4>
            </div>
            <div className="left">
                <ul>
                    <li onClick={()=>{
                        window.location.href="/"
                    }}>Home</li>
                    <li onClick={()=>{
                        window.location.href = "/about/"
                    }}>About Us</li>
                    <li onClick={()=>{
                        window.location.href = "/services/"
                    }} >Services</li>
                    <li onClick={()=>{
                        window.location.href = "/contact/"
                    }} >Contact Us</li>
                </ul>

            </div>
        </div>
        </>
    )

}

export default Navigation;