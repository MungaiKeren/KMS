import React from "react";
import '../Styles/Landing.scss';
import Navigation from "../component/Navigation";
import Card from "../component/Cards";


export function LandingPage(props){
    return (
        <>
            <Navigation />
            <Card />            
        </>
    )

}

export default LandingPage;