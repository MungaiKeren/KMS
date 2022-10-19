import React from "react";
import TopNav from "../component/TopNav";
import Footer from "../component/Footer";
import Navigation from "../component/Navigation";
import BottomNav from "../component/BottomNav";
import PhoneNav from "../component/PhoneNav";

export function Services(props){
    return (
        <>
        <TopNav />
        <div className="hide-on-phone">
        <Navigation />        
        <BottomNav />
        </div>      
        <div className="display-on-phone">
        <PhoneNav />    
        </div>
        <div className="services">
            <h1>Our Services</h1>
        </div>
        <Footer />
        </>
    )
}

export default Services;