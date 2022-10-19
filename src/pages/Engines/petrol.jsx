import React from "react";

import BottomNav from "../../component/BottomNav";
import Footer from "../../component/Footer";
import Navigation from "../../component/Navigation";
import BreadCrumbs from "../../component/Utils/BreadCrumbs";
import TopNav from "../../component/TopNav";
import PhoneNav from "../../component/PhoneNav";


export default function PetrolEngines(props){
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
        <BreadCrumbs catName="Petrol 7.5hp Engines" />
        <h4 style={{"fontSize":"20px", "textAlign":"center", "textDecoration":"underline"}}>Petrol 7.5hp Engines available</h4>
        <div className="table">
            <table>
                <tr>
                    <th>Name</th>
                    <th>HP</th>
                    <th>Price</th>
                </tr>
                <tr>
                    <td>Rhino Japan</td>
                    <td>7.5HP</td>
                    <td>12,500</td>
                </tr>
                <tr>
                    <td>Levhart</td>
                    <td>7.5HP</td>
                    <td>12,500</td>
                </tr>
                <tr>
                    <td>Stallion Germany</td>
                    <td>7.5HP</td>
                    <td>12,500</td>
                </tr>
                <tr>
                    <td>Gilardoni Italy</td>
                    <td>7.5HP</td>
                    <td>12,500</td>
                </tr>
                <tr>
                    <td>Power Italia</td>
                    <td>7.5HP</td>
                    <td>12,600</td>
                </tr>
                <tr>
                    <td>Carltons UK</td>
                    <td>7.5HP</td>
                    <td>15,000</td>
                </tr>
            </table>
        </div>
        <Footer />
        </>
    )
}