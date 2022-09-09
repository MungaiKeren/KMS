import React from "react";
import Footer from "../component/Footer";
import Navigation from "../component/Navigation";

export function AboutPage(props){
    return (
        <>
        <Navigation />
        <div className="content">
            <h1>About Us</h1>
            <div className="p">
                <p>We are dedicated to provide you with all your machinery needs. Buying a machine is a matter of trust, whether you are buying online or offline. Our company is a renowned supplier of quality machinery from quality brands in many categories. We supply quality machines including; power drills, circular saws, water pumps, sugarcane juice machines, bone cutters, concrete hoists, walking tractors and many others. Our company stands for quality and optimism and we ensure that you make the right purchase the first time.</p>
            </div>
        </div>
        <Footer />
        </>
    )
}

export default AboutPage;