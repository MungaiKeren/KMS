import React from "react";
import '../Styles/Landing.scss';
import Navigation from "../component/Navigation";
import TopNav from "../component/TopNav";
import BottomNav from "../component/BottomNav";
import PhoneNav from "../component/PhoneNav";
import Card from "../component/Cards";
import ContactForm from "../component/Utils/ContactForm";
import Footer from "../component/Footer";

// import images
import massey from "../assets/Images/New/MasseyFurgerson.jpg"
import img1 from "../assets/Images/New/IMG-20221001-WA0004.jpg"
import lawnmower from "../assets/Images/New/IMG-20221001-WA0000.jpg"
import img2 from "../assets/Images/New/IMG-20221001-WA0002.jpg"



export function LandingPage(props){
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
        <Card />
        <hr />
        <h2>Kenya Machinery Services</h2>
        <p id="p">We are dedicated to provide you with all your machinery needs.
        Buying a machine is a matter of trust, whether you are buying online or offline. Our company is a renowned supplier of quality machinery from quality brands in many categories. We supply quality machines including; power drills, circular saws, water pumps, sugarcane juice machines, bone cutters, concrete hoists, walking tractors and many others. Our company stands for quality and optimism and we ensure that you make the right purchase the first time.
        </p>
        
        <ContactForm />
        <div className="categs">
            <div className="massey">
                <img src={massey} height={300} width={300} className="image" alt="Massey Furgerson farm tractor available for sale in kenya" />
            </div>
            <div className="massey">
                <img src={img1} height={300} width={300} alt="Farming tools for sale" />
                
            </div>
            <div className="massey">
                <img src={lawnmower} height={300} width={300} alt="lawnmowers available for sale in kenya" />
            </div>
            <div className="massey">
                <img src={img2} height={300} width={300} alt="lawnmowers available for sale in kenya" />
            </div>
        </div>
        <Footer />
        </>
    )

}

export default LandingPage;