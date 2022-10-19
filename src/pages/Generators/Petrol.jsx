import React from "react";

// components
import Navigation from "../../component/Navigation";
import BottomNav from "../../component/BottomNav";
import BreadCrumbs from '../../component/Utils/BreadCrumbs';
import Footer from "../../component/Footer";
import NavGroup from "../../component/Utils/NavGroup";
import TopNav from "../../component/TopNav";
import PhoneNav from "../../component/PhoneNav";

// image imports
import gasoline from "../../assets/Images/PetrolGenerator.jpg";
import petrol from "../../assets/Images/petrolGenerators.jpg";
import C4000E from "../../assets/Images/C400EGasolineGenerator.jpg";

export default function PetrolGenerators(props) {


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
        <BreadCrumbs catName="Petrol Generators"/> <br />

        {/* image displays */}
        <div className="displayImages">
            <div className="imageContainer">
                <img src={gasoline} height="400px" width="410px" alt="" className="image"/>
                <div className="imgOverlay">
                    <p>Carltons UK C6500E Gasoline Generator</p>
                </div>
            </div>
            <div className="imageContainer">
                <img src={petrol} height="400px" width="410px" alt="" className="image"/>
                <div className="imgOverlay">
                    <p>Carltons UK C8500E Gasoline Generator</p>
                </div>
            </div>
            <div className="imageContainer">
                <img src={C4000E} height="400px" width="410px" alt="" className="image"/>
                <div className="imgOverlay">
                    <p>Carltons UK C4000E Gasoline Generator</p>
                </div>
            </div>
        </div>

        {/* end image displays */}

        <NavGroup
            label="Carltons UK Silent Water Cooled Diesel Generator"
        >
            <div className="table">
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
        </NavGroup>

        
        <Footer />
        </>
    )
};