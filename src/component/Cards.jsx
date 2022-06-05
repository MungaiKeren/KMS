import React, { useState } from "react";

import img1 from "../assets/Images/SilentDieselGenerator_GL1200ED.png"
import img2 from "../assets/Images/download.jpg"
import img3 from "../assets/Images/PowerItalia RT16800ED.jpg"
import img4 from "../assets/Images/SilentDieselGenerator_GL1200ED.png"
import img5 from "../assets/Images/ElectricPressureWasher3400PSL.jpg"
import img6 from "../assets/Images/ElectricPressureWasher4200PSL.jpg"
import img7 from "../assets/Images/PetrolPressureWasher2600PSL.jpg"
import img8 from "../assets/Images/PetrolPressureWasher3200PSL.jpg"

import { MdChevronLeft, MdChevronRight } from "react-icons/md";


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

    const images = [img1,img2,img3,img4, img5, img6, img7, img8];
    const slides = [1,2,3,4,5,6,7,8];

    const slideLeft = () => {
        var slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft + 500;
    }
    const slideRight = () => {
        var slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft - 500;
    }

    return (
        <div className="main-slider-container">
            <MdChevronLeft size={40} className="slider-icon left" onClick={slideLeft} />
            <div id="slider">
                {
                    slides.map((slide,index)=>{
                        return (
                            <div className="slider-card">
                                <div className="slider-card-image">

                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <MdChevronRight size={40} className="slider-icon right" onClick={slideRight} />
        </div>
    )

}

export default Card;