import React, { useState } from "react";
import Navigation from "../component/Navigation";

export function AboutPage(props){
    return (
        <>
        <Navigation />
        <div className="content">
            <h1>About Us</h1>
        </div>
        </>
    )
}

export default AboutPage;