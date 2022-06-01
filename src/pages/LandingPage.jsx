import React from "react";
import '../Styles/Landing.scss';
import Navigation from "../component/Navigation";


export function LandingPage(props){
    return (
        <>
            <Navigation />
            <div className="content">
                <div className="display">
                    <h4>keren</h4>
                </div>
            </div>
        </>
    )

}

export default LandingPage;