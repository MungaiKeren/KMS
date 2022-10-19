import React from "react";
import TopNav from "../component/TopNav";
import PhoneNav from "../component/PhoneNav";
import Footer from "../component/Footer";
import img from "../assets/Images/404.webp"

export default function NotFound(props){
    return (
       <>
       
       <TopNav />
       <div className="hide-on-phone">
        </div>      
        <div className="display-on-phone">
        <PhoneNav />    
        </div>

        <div className="notfound">
            <img src={img} alt="" />
            <h1>NOT FOUND</h1>
            <p>We've searched everywhere but couldn't find this location.You are propably lost. Go back <a href="/">home</a>?</p>
        </div>

        <Footer />
       </>
    )
};