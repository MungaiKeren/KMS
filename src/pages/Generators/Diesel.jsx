import React from "react";
import Navigation from "../../component/Navigation";
import BottomNav from "../../component/BottomNav";
import BreadCrumbs from '../../component/BreadCrumbs';
import carltons from "../../assets/Images/IMG-20220531-WA0009.jpg"
import Footer from "../../component/Footer";

export default function DieselGenerators(props) {
    return (
        <>
        <Navigation />
        <BottomNav />
        <BreadCrumbs catName="Diesel Generators"/> <br />
        <div className="imgDisplay">
            <img src={carltons} alt="" className="image"/>
            <div className="imgOverlay">
                <p>Carltons UK Silent Water Cooled Diesel Generator</p>
            </div>
        </div>

        <div className="table">
            <h3>Carltons UK Silent Water Cooled Diesel Generator (3PHASE)</h3>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Engine Capacity</th>
                    <th>Price</th>
                </tr>

                <tr>
                    <td>_CDG12.7S</td>
                    <td>12.7KVA</td>
                    <td>795,000</td>
                </tr>
                <tr>
                    <td>CDG18.7S</td>
                    <td>18.7KVA</td>
                    <td>888,000</td>
                </tr>
                <tr>
                    <td>CDG25S</td>
                    <td>25KVA</td>
                    <td>990,000</td>
                </tr>
                <tr>
                    <td>CDG37.5S</td>
                    <td>37.5KVS</td>
                    <td>1,170,000</td>
                </tr>
                <tr>
                    <td>CDG50S</td>
                    <td>62.5KVA</td>
                    <td>1,350,000</td>
                </tr>
                <tr>
                    <td>CDG62.5S</td>
                    <td>62.5KVA</td>
                    <td>1,480,000</td>                    
                </tr>
                <tr>
                    <td>CDG100S</td>
                    <td>100KVA</td>
                    <td>2,200,000</td>
                </tr>
                <tr>
                    <td>CDG150S</td>
                    <td>150KVA</td>
                    <td>2,900,000</td>
                </tr>
                <tr>
                    <td>CDG200S</td>
                    <td>150KVA</td>
                    <td>4,200,000</td>
                </tr>
            </table>
        </div>
        <Footer />
        </>
    )
};