import React, { useState } from "react";

import img1 from "../assets/Images/SilentDieselGenerator_GL1200ED.png"
import img2 from "../assets/Images/download.jpg"
import img3 from "../assets/Images/PowerItalia RT16800ED.jpg"
import img4 from "../assets/Images/SilentDieselGenerator_GL1200ED.png"
import img5 from "../assets/Images/ElectricPressureWasher3400PSL.jpg"
import img6 from "../assets/Images/ElectricPressureWasher4200PSL.jpg"
import img7 from "../assets/Images/PetrolPressureWasher2600PSL.jpg"
import img8 from "../assets/Images/PetrolPressureWasher3200PSL.jpg"

import iconL from '../assets/Images/left-arrow.jpg'
import iconR from "../assets/Images/right-arrow.png"


export function Card(props){
    const Cards = (props) => {
        return (
            <div className="card">
                <div className="img-top">
                    <img src={props.img} height="400px" width="400px" alt={props.altText} />
                    <h3 id="imgLabel">{props.name}</h3>
                </div>
                <div className="overlay">
                    
                </div>
            </div>
        )
    }

    const images = [img1,img2,img3,img4, img5, img6, img7, img8]
    const [image, currentImage] = useState()

    return (
        <div className="contents">
            <div className="left-icon">
                <img src={iconL} alt="" height="30px" width="30px"  />
            </div>
            <Cards 
                img={img1}
                altText="100KVA Carltons-UK(Cummins Engine)"
                name="100KVA Carltins-UK"
            />
            <Cards 
                img={img2}
                altText="engine"
                name="Engine"
            />
            <Cards 
                img={img3}
                altText="SilentDieselGenerator GL1200ED"
                name="Silent Generator"
            />
            <div className="right-icon">
                <img src={iconR} height="30px" width="30px" alt="" />
            </div>
        </div>
    )

}

export default Card;