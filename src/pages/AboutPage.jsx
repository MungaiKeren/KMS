import React from "react";
import TopNav from "../component/TopNav";
import Footer from "../component/Footer";
import Navigation from "../component/Navigation";
import {MdPhone, MdMailOutline} from "react-icons/md";

export function AboutPage(props){
    return (
        <>
        <TopNav/>
        <Navigation />
        <div className="content">
            <h1>About Us</h1>
            <div className="p">
                <p>We are dedicated to provide you with all your machinery needs. Buying a machine is a matter of trust, whether you are buying online or offline. Our company is a renowned supplier of quality machinery from quality brands in many categories. We supply quality machines including; power drills, circular saws, water pumps, sugarcane juice machines, bone cutters, concrete hoists, walking tractors and many others. Our company stands for quality and optimism and we ensure that you make the right purchase the first time.</p>
            </div>
        </div>
        {/* <div className="contact">
            <div className="col1">
                <h4>Give us a Call: <br />
                    <span>
                        <MdPhone size={20} className="phone" />
                        0706 367 488 <br />
                    </span>
                    <span>
                        <MdMailOutline size={20} className="email"/>
                        info@kenyamachineryservices.com
                    </span>

                </h4>
            </div>
        </div> */}
        <Footer />
        </>
    )
}

export default AboutPage;