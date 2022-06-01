import React from "react";

const Item = (props) => {
    return (
        <div className="buttons" onClick={() => {
            window.location.href = `/category/${props.cat}`
        }}>
            <div className="content">
                <p>{props.txt}</p>
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
                <Item 
                    cat = "lawnmowers"
                    txt = "Lawn Mowers"
                />
            </div>
        </div>
    )

}
export default BottomNav;