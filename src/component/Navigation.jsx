import React from "react";



export function Navigation(props){

    return (
        <>
        <div className="navigation">
            <div className="left">
                <nav className="shift">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about/">About</a></li>
                        <li><a href="/services/">Services</a></li>
                        <li><a href="/contactus/">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </div>
        </>
    )

}

export default Navigation;