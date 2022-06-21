import React from "react";
import { MdKeyboardArrowDown} from 'react-icons/md';
import NavLink from "./NavLink";


export function BottomNav(){


    return (
        <div className="container">
            <div className="categories">

                <div className="buttons">
                    <div className="content">
                        <a href="/category/generators" className="text">
                            Generators                        
                        </a>
                        <MdKeyboardArrowDown size={20} className="arrow-down" />
                        <div className="dropdown-content">
                            <NavLink 
                                url = "/category/generators/dieselgenerators"
                                link = "Diesel Generators (Cummins Engine)"
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
                        </a>
                        <MdKeyboardArrowDown size={20} className="arrow-down" />
                        <div className="dropdown-content">
                            {/* <NavLink 
                                url = "/category/engines/gasoline"
                                link = "Gasoline Engines"
                            />
                            <NavLink 
                                url ="/category/engines/"
                                link = "Cummins"
                            /> */}
                        </div>                        
                    </div>
                </div>

                <div className="buttons">
                    <div className="content">
                        <a href="/category/gardentools" className="text">
                            Garden Tools
                        </a>
                        <MdKeyboardArrowDown size={20} className="arrow-down" />
                        <div className="dropdown-content">
                            <NavLink 
                                url="/category/gardentools/brushcutter"
                                link="Brush Cutters"
                            />
                            <NavLink 
                                url="/category/gardentools/grasscutter"
                                link="Grass Cutter"
                            />
                            <NavLink 
                                url="/category/gardentools/lawnmowers"
                                link="Lawn Mowers"
                            />
                        </div>
                    </div>
                </div>

                <div className="buttons">
                    <div className="content">
                        <a href="/category/pressurewasher/" className="text">
                            Pressure Washer
                        </a>
                        <MdKeyboardArrowDown size={20} className="arrow-down" />
                        <div className="dropdown-content">
                            <NavLink 
                                url = "/category/petrol pressure washer/"
                                link = "Petrol Pressure Washer (Tamashi Japan)"
                            />
                            <NavLink 
                                url ="/category/pressurewasher/electric"
                                link = "Electric Pressure Washer (Cummins Available)"
                            />
                        </div>                        
                    </div>
                </div>
                <div className="buttons">
                    <div className="content">
                        <a href="/category/farmtractors" className="text">
                            Farm Tractors
                        </a>
                        <MdKeyboardArrowDown size={20} className="arrow-down" />
                        <div className="dropdown-content">
                            <NavLink 
                                url = "/category/farmtractors/stallions"
                                link = "Stallions"
                            />
                            <NavLink 
                                url ="/category/farmtractors/levhart"
                                link = "Levhart"
                            />
                            <NavLink
                                url="/category/farmtractors/carltons"
                                link="Carltons"
                            />
                        </div>                        
                    </div>
                </div>
            </div>
        </div>
    )

}
export default BottomNav;