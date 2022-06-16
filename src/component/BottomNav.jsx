import React, { useState } from "react";
import {MdKeyboardArrowDown} from 'react-icons/md';
import NavLink from "./NavLink";


export function BottomNav(){


    return (
        <div className="container">
            <div className="categories">

                <div className="buttons">
                    <div className="content">
                        <a href="/category/generators" className="text">
                            Generators
                            <span><MdKeyboardArrowDown size={20} className="arrow-down" /></span>                            
                        </a>
                        <div className="dropdown-content">
                            <NavLink 
                                url = "/category/generators/dieselgenerators"
                                link = "Diesel Generators"
                            />
                            <NavLink 
                                url = "/category/generators/petrolgenerators"
                                link = "Petrol Generators"
                            />
                        </div>
                    </div>
                </div>

                <div className="buttons">
                    <div className="content">
                        <a href="/category/engines" className="text">
                            Engines
                            <MdKeyboardArrowDown size={20} className="arrow-down" />
                        </a>
                        <div className="dropdown-content">
                            <NavLink 
                                url = "/category/gasolineEngines/"
                                link = "Gasoline Engines"
                            />
                            <NavLink 
                                url ="/category/engines/"
                                link = ""
                            />
                        </div>                        
                    </div>
                </div>

                <div className="buttons">
                    <div className="content">
                        <a href="/category/gardentools" className="text">
                            Garden Tools
                        </a>
                    </div>
                </div>

                <div className="buttons">
                    <div className="content">
                        <a href="/category/pressurewasher" className="text">
                            Pressure Washer
                            <MdKeyboardArrowDown size={20} className="arrow-down" />
                        </a>
                        <div className="dropdown-content">
                            <NavLink 
                                url = "/category/gasolineEngines/"
                                link = "Petrol Pressure washer"
                            />
                            <NavLink 
                                url ="/category/engines/"
                                link = "Electric Pressure washer"
                            />
                        </div>                        
                    </div>
                </div>
                <div className="buttons">
                    <div className="content">
                        <a href="/category/farmtractors" className="text">
                            Farm Tractors
                            <MdKeyboardArrowDown size={20} className="arrow-down" />
                        </a>
                        <div className="dropdown-content">
                            <NavLink 
                                url = "/category/gasolineEngines/"
                                link = "Gasoline Engines"
                            />
                            <NavLink 
                                url ="/category/engines/"
                                link = ""
                            />
                        </div>                        
                    </div>
                </div>

                <div className="buttons">
                    <div className="content">
                        <a href="/category/lawnmowers" className="text">
                            Lawn Mowers
                            <MdKeyboardArrowDown size={20} className="arrow-down" />
                        </a>
                        <div className="dropdown-content">
                            <NavLink 
                                url = "/category/gasolineEngines/"
                                link = "Gasoline Engines"
                            />
                            <NavLink 
                                url ="/category/engines/"
                                link = ""
                            />
                        </div>                        
                    </div>
                </div>
                <div className="buttons">
                    <div className="content">
                        <a href="/category/grasscutter" className="text">
                            Grass Cutter
                            <MdKeyboardArrowDown size={20} className="arrow-down" />
                        </a>
                        <div className="dropdown-content">
                            <NavLink 
                                url = "/category/gasolineEngines/"
                                link = "Gasoline Engines"
                            />
                            <NavLink 
                                url ="/category/engines/"
                                link = ""
                            />
                        </div>                        
                    </div>
                </div>

            </div>
        </div>
    )

}
export default BottomNav;