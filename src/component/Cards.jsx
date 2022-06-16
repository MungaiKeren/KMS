import React, { useState } from "react";

import img1 from "../assets/Images/new.jpg"
import img2 from "../assets/Images/image.png"
import img3 from "../assets/Images/ElectricPressureWasher3400PSL.jpg"
import img4 from "../assets/Images/ElectricPressureWasher4200PSL.jpg"
import img5 from "../assets/Images/PetrolPressureWasher2600PSL.jpg"
import img6 from "../assets/Images/PetrolPressureWasher3200PSL.jpg"
import img7 from '../assets/Images/PowerItaliaRT16800ED.jpg'

import { MdChevronLeft, MdChevronRight } from "react-icons/md"


export function Card(props){

    const slide = [
        {img:img1,altText:"silent diesel generator price in kenya", label:"Silent Diesel Generator"},
        {img:img2, altText:"", label:"Lawn Mower"},
        {img:img3, altText:"power italia price in kenya", label:"Power Italia "},
        {img:img4, altText:"", label:"pressure washer"},
        // {img:img5, altText:"", label:""},
        // {img:img6, altText:"", label:""},
        {img:img7, altText:"", label:"Garden tools"},
        // {img:img8, altText:"", label:""},
    ]
    // const slides = [1,2,3,4,5,6,7,8];

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