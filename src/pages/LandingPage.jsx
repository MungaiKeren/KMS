import React from "react";
import '../Styles/Landing.scss';
import Navigation from "../component/Navigation";
import TopNav from "../component/TopNav";
import BottomNav from "../component/BottomNav";
import Card from "../component/Cards";
import Footer from "../component/Footer";



export function LandingPage(props){
    return (
        <>
        <TopNav />
        <Navigation />
        <BottomNav />
        <Card />
        <hr />
        <h2>Kenya Machinery Services</h2>
        <p id="p">We are dedicated to provide you with all your machinery needs.
        Buying a machine is a matter of trust, whether you are buying online or offline. Our company is a renowned supplier of quality machinery from quality brands in many categories. We supply quality machines including; power drills, circular saws, water pumps, sugarcane juice machines, bone cutters, concrete hoists, walking tractors and many others. Our company stands for quality and optimism and we ensure that you make the right purchase the first time.
        </p>
        
        <Footer />
        </>
    )

}

export default LandingPage;