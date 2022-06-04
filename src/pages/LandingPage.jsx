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
        <h1>Some more content</h1>
        <Footer />       
        </>
    )

}

export default LandingPage;