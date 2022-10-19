import React from "react";
import TopNav from "../component/TopNav";
import Navigation from "../component/Navigation";
import Footer from "../component/Footer";
import BottomNav from "../component/BottomNav";
import PhoneNav from "../component/PhoneNav";
import ContactForm from "../component/Utils/ContactForm";

export function ContactUs(props){

    

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
        <ContactForm />
        <Footer />
        </>
    )
}

export default ContactUs;