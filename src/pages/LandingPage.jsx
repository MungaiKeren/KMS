import React from "react";
import '../Styles/Landing.scss';
import Navigation from "../component/Navigation";
import TopNav from "../component/TopNav";
import BottomNav from "../component/BottomNav";
import Card from "../component/Cards";


export function LandingPage(props){
    return (
        <>
        <TopNav />
        <Navigation />
        <BottomNav />
        <Card />            
        </>
    )

}

export default LandingPage;