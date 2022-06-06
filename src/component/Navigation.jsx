import React from "react";



export function Navigation(props){

    return (
        <>
        <div className="navigation">
            <div className="right">
                <h4>Kenya Machinery Services</h4>
            </div>
            <div className="left">
            <nav class="shift">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about/">About</a></li>
                    <li><a href="/services/">Services</a></li>
                    <li><a href="/contacts/">Contact</a></li>
                </ul>
            </nav>
            </div>
        </div>
        </>
    )

}

export default Navigation;