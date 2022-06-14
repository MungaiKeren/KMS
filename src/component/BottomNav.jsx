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
                            <MdKeyboardArrowDown size={20} className="arrow-down" />
                        </a>
                        <div className="dropdown-content">
                            <NavLink 
                                url = "/category/dieselgenerators"
                                link = "Diesel Generators"
                            />
                            <NavLink 
                                url = "/category/petrolgenerators"
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
                                url = ""
                                link = ""
                            />
                            <NavLink 
                                url =""
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

            </div>
        </div>
    )

}
export default BottomNav;