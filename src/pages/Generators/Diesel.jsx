import React, { useState } from "react";
import Navigation from "../../component/Navigation";
import BottomNav from "../../component/BottomNav";
import BreadCrumbs from '../../component/Utils/BreadCrumbs';
import carltons from "../../assets/Images/IMG-20220531-WA0009.jpg"
import Footer from "../../component/Footer";
import NavGroup from "../../component/Utils/NavGroup";
import PowerItalia from "../../assets/Images/PowerItaliaRT16800ED.jpg";
import Gilardoni from "../../assets/Images/this-image.jpg";

export default function DieselGenerators(props) {


    return (
        <>
        <Navigation />
        <BottomNav />
        <BreadCrumbs catName="Diesel Generators"/> <br />

        {/* image displays */}
        <div className="displayImages">
            <div className="imageContainer">
                <img src={carltons} height="400px" width="410px" alt="" className="image"/>
                <div className="imgOverlay">
                    <p>Carltons UK Silent Water Cooled Diesel Generator</p>
                </div>
            </div>
            <div className="imageContainer">
                <img src={PowerItalia} alt="" className="image"/>
                <div className="imgOverlay">
                    <p>Power Italia</p>
                </div>
            </div>
            <div className="imageContainer">
                <img src={Gilardoni} alt="" className="image"/>
                <div className="imgOverlay">
                    <p>Gilardoni Italy</p>
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

        <NavGroup
            label = "Power Italia Silent Air Cooled Diesel Generators (SINGLE PHASE)"
        >
            <div className="table">
                <table>
                    <tr>
                        <th>Name</th>
                        <th>HP</th>
                        <th>Price in Ksh</th>
                    </tr>
                    <tr>
                        <td>Rt8800ED</td>
                        <td>7.5KVA</td>
                        <td>145,500</td>
                    </tr>
                    <tr>
                        <td>Rt9800ED</td>
                        <td>8.5KVA</td>
                        <td>168,000</td>
                    </tr>
                </table>
            </div>
        </NavGroup>
        <NavGroup
            label = "Power Italia Silent Air Cooled Diesel Generators (Double switch Single & 3phase with ATS)"
        >
            <div className="table">
                <table>
                    <tr>
                        <th>Name</th>
                        <th>HP</th>
                        <th>Price</th>
                    </tr>
                    <tr>
                        <td>Rt11500ED</td>
                        <td>10KVA</td>
                        <td>175,000 <span className="danger">(Out of Stock)</span></td>
                    </tr>
                    <tr>
                        <td>Rt13500ED</td>
                        <td>12KVA</td>
                        <td>275,000</td>
                    </tr>
                    <tr>
                        <td>Rt16800ED</td>
                        <td>15KVA</td>
                        <td>455,000</td>
                    </tr>
                    <tr>
                        <td>Rt19600ED</td>
                        <td>18KVA</td>
                        <td>475,000</td>
                    </tr>
                </table>
            </div>
        </NavGroup>
        <NavGroup
            label = "Gilardoni Italy Silent Diesel Generators (SINGLE PHASE)"
        >
            <div className="table">
                <table>
                    <tr>
                        <th>Name</th>
                        <th>HP</th>
                        <th>Price</th>
                    </tr>
                    <tr>
                        <td>Gl8000ED</td>
                        <td>7.5KVA</td>
                        <td>142,000</td>
                    </tr>
                    <tr>
                        <td>Gl9000ED</td>
                        <td>8.5KVA</td>
                        <td>165,000</td>
                    </tr>
                </table>
            </div>            
        </NavGroup>
        <NavGroup
        label="Gilardoni Italy Silent Diesel Generators (Double switch Single 3phase with ATS)"
        >
            <div className="table">
                <table>
                    <tr>
                        <th>Name</th>
                        <th>HP</th>
                        <th>Price</th>
                    </tr>
                    <tr>
                        <td>Gl10000ED</td>
                        <td>10KVA</td>
                        <td>172,000 <span className="danger">(Out of Stock)</span> </td>
                    </tr>
                    <tr>
                        <td>Gl12000ED</td>
                        <td>12KVA</td>
                        <td>270,000</td>
                    </tr>
                    <tr>
                        <td>Gl15000ED</td>
                        <td>15KVA</td>
                        <td>450,000</td>
                    </tr>
                    <tr>
                        <td>Rt17000ED</td>
                        <td>18KVA</td>
                        <td>475,000</td>
                    </tr>
                </table>
            </div>
        </NavGroup>
        
        
        <Footer />
        </>
    )
};