import React, { useState } from "react";
import {BiMenu} from 'react-icons/bi';
import {MdOutlineArrowDropDown} from 'react-icons/md';

export default function PhoneNav(props){
    const [menuItems, showMenuItems] = useState(false);
    const [subMenuG, setSubMenuG] = useState(false);
    const [subMenuE, setSubMenuE] = useState(false);
    const [subMenuP, setSubMenuP] = useState(false);
    const [subMenuGT, setSubMenuGT] = useState(false);
    const [subMenuFT, setSubMenuFT] = useState(false);

    const toggleMenu = () => {
        showMenuItems(!menuItems);
    }

    return (
        <div className="phone-nav">
            <BiMenu 
                size={40} 
                className="menuIcon" 
                onClick={toggleMenu}
                />
            {menuItems&&
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About US</a></li>
                <li className="hasDD">
                   <a href="/category/generators">Generators</a>
                    <MdOutlineArrowDropDown 
                    onClick={()=>{
                        setSubMenuG(!subMenuG);
                    }} 
                    className="arrowDown" 
                    size={30} 
                    color={"white"}/>
                </li>
                {subMenuG&&
                        <>
                        <p onClick={()=>{
                    window.location.href ="category/generators/dieselgenerators"
                }}>Diesel Generators</p>
                        <p onClick={()=>{
                    window.location.href ="category/generators/petrolgenerators"
                }}>Petrol Generators</p>
                        </>
                    }
                <li className="hasDD">
                   <a href="/category/engines">Engines</a>
                    <MdOutlineArrowDropDown
                        onClick={()=>{
                            setSubMenuE(!subMenuE);
                        }} className="arrowDown" size={30} color={"white"}/>    
                </li>
                {subMenuE&&
                    <>
                    <p onClick={()=>{
                        window.location.href="/category/engines/petrol"
                    }}>Petrol Engines</p>
                    <p onClick={()=>{
                        window.location.href="/category/engines/diesel"
                    }}>Diesel Engines</p>
                    </>
                }
                <li className="hasDD">
                   <a href="/category/gardentools">Garden Tools</a>
                    <MdOutlineArrowDropDown
                        onClick={()=>{
                            setSubMenuGT(!subMenuGT);
                        }} className="arrowDown" size={30} color={"white"}/>
                </li>
                {subMenuGT&&
                <>
                <p onClick={()=>{
                    window.location.href = "/category/gardentools/brushcutter"
                }}>Brush Cutter</p>
                <p onClick={()=>{
                    window.location.href = "/category/gardentools/grasscutter"
                }}>Grass Cutter</p>
                <p onClick={()=>{
                    window.location.href = "/category/gardentools/lawnmowers"
                }}>Lawn Mowers</p>
                </>
                }
                <li className="hasDD">
                   <a href="/category/pressurewasher/">Pressure Washer</a>
                    <MdOutlineArrowDropDown onClick={()=>{
                        setSubMenuP(!subMenuP);
                    }} className="arrowDown" size={30} color={"white"}/>
                </li>
                {subMenuP&&
                <>
                <p onClick={()=>{
                    window.location.href = "/category/pressurewasher/electric"
                }}>Petrol PW (Tamashi japan)</p>
                <p onClick={()=>{
                    window.location.href="category/pressurewasher/electric"
                }}>Electric PW (Cummins)</p>
                </>}
                <li className="hasDD">
                   <a href="/category/farmtractors">Farm Tractors</a>
                    <MdOutlineArrowDropDown onClick={()=>{
                        setSubMenuFT(!subMenuFT);
                    }} className="arrowDown" size={30} color={"white"}/>
                </li>
                {subMenuFT&&
                <>
                <p onClick={()=>{
                    window.location.href ="/category/farmtractors/stallions"
                }}>Stallions</p>
                <p onClick={()=>{
                    window.location.href ="/category/farmtractors/levhart"
                }}>Levhart</p>
                <p onClick={()=>{
                    window.location.href ="/category/farmtractors/carltons"
                }}>Carltons</p>
                </>}
                <li onClick={()=>{
                    window.location.href ="/services"
                }}>Services</li>
                <li onClick={()=>{
                    window.location.href="/contactus"
                }}>Contact Us</li>
            </ul>
            }
        </div>
    )
}