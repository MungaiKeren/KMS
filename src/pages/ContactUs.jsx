import React from "react";
import TopNav from "../component/TopNav";
import Navigation from "../component/Navigation";
import Footer from "../component/Footer";
import ContactForm from "../component/Utils/ContactForm";

export function ContactUs(props){

    

    return (
        <>
        <TopNav />
        <Navigation />
        <ContactForm />
        <Footer />
        </>
    )
}

export default ContactUs;