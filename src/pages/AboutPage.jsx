import React from "react";
import Footer from "../component/Footer";
import Navigation from "../component/Navigation";

export function AboutPage(props){
    return (
        <>
        <Navigation />
        <div className="content">
            <h1>About Us</h1>
        </div>
        <Footer />
        </>
    )
}

export default AboutPage;