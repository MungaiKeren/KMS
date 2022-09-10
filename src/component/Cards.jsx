import React, { useEffect } from "react";

import img1 from "../assets/Images/Lawn_Mower1.jpg"
import img2 from "../assets/Images/image.png"
import img3 from "../assets/Images/brushcutter2.jpg"
import img4 from "../assets/Images/GasolineEngine.png"
import img5 from "../assets/Images/C400EGasolineGenerator.jpg";
import img6 from "../assets/Images/tractor.jpg";
import img7 from '../assets/Images/PowerItaliaRT16800ED.jpg';
import img8 from "../assets/Images/Stallions14hpDieselWaterPump.jpg"

import { MdChevronLeft, MdChevronRight } from "react-icons/md"


export function Card(props){

    const slide = [
        {img:img5, altText:"Carltons UK 4000E Gasoline Generator available for sale in Kenya", label:"Carltons UK 4000E Gasoline Generator"},
        {img:img6, altText:"stallions farm tractor available for sale in kenya", label:"Stallions Farm Tractor Available"},
        {img:img1,altText:"silent diesel generator price in kenya", label:"Lawn Mower"},
        {img:img2, altText:"GL 1200ED Silent Diesel Generator available for sale in Kenya", label:"GL 1200ED Silent Diesel Generator"},
        {img:img3, altText:"power italia price in kenya", label:"Brush Cutters"},
        {img:img4, altText:"gasoline engine for sale in kenya", label:"GL275 Gasoline Engine"},
        {img:img7, altText:"power italia generator for sale in Kenya", label:"Power Italia Generator"},
        {img:img8, altText:"stallions 14HP diesel water pump availableforsalein kenya", label:"Stallions 14HP Diesel Water Pump"}
    ]

    const slideLeft = () => {
        var slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft + 500;
    }
    const slideRight = () => {
        var slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft - 500;
    }

    useEffect(()=>{
        setInterval(()=>{
            slideLeft()
        }, 4000);
        return ;
    }, []);

    return (
        <div className="main-slider-container">
            <MdChevronLeft size={40} className="slider-icon left" onClick={slideLeft} />
            <div id="slider">
                {
                    slide.map((slide,index)=>{
                        return (
                            <div className="slider-card" key={index}>
                                <div className="slider-card-image" style={{background: `url(${slide.img})`}}>
                                    <span className="slider-card-title">{slide.label}</span>
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