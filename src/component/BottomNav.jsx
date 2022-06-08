import React from "react";
import {MdKeyboardArrowDown} from 'react-icons/md'

const Item = (props) => {
    return (
        <div className="buttons" onClick={() => {
            window.location.href = `/category/${props.cat}`
        }}>
            <div className="content">
                <p className="text">{props.txt}</p>
                <MdKeyboardArrowDown size={20} className="arrow-down"/>
            </div>
            <div className="dropdown-content">
                <span className="link">{props.link1}</span>
                <span className="link">{props.link2}</span>
                <span className="link">{props.link3}</span>
                <span className="link">{props.link4}</span>
                <span className="link">{props.link5}</span>
            </div>
        </div>
    )
}

export function BottomNav(){
    return (
        <div className="container">
            <div className="categories">
                <Item 
                    cat = "generators"
                    txt = "Generators"
                    link1 = "DIESEL GENERATORS"
                    link2 = "Petrol Generators"
                    link3 = ""
                />
                <Item 
                    cat = "Pressure Washer"
                    txt = "Pressure Washer"
                />
                <Item 
                    cat = "Petrol Engines"
                    txt = "Petrol Engines"
                />
                <Item 
                    cat = "gardentools"
                    txt = "Garden Tools"
                />
                <Item 
                    cat = "waterpumps"
                    txt = "Water Pumps"
                />
                <Item 
                    cat = "powertools"
                    txt = "Power Tools"
                />
                <Item 
                    cat = "lawnmowers"
                    txt = "Lawn Mowers"
                />
            </div>
        </div>
    )

}
export default BottomNav;