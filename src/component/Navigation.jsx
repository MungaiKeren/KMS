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
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Downloads</a></li>
                    <li><a href="#">More</a></li>
                    <li><a href="#">Nice staff</a></li>
                </ul>
            </nav>
            </div>
        </div>
        </>
    )

}

export default Navigation;