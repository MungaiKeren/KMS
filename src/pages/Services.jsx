import React from "react";
import TopNav from "../component/TopNav";
import Footer from "../component/Footer";
import Navigation from "../component/Navigation";

export function Services(props){
    return (
        <>
        <TopNav />
        <Navigation />
        <div className="services">
            <h1>Our Services</h1>
        </div>
        <Footer />
        </>
    )
}

export default Services;