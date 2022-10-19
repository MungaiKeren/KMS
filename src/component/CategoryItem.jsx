import React from "react";
import BottomNav from "./BottomNav";
import Navigation from "./Navigation";
import PhoneNav from "./PhoneNav";
import BreadCrumbs from "./Utils/BreadCrumbs";


export default function CategoryItem(props){
    const items = props.items

    console.log(items);

    return (
        <>
        <div className="hide-on-phone">
        <Navigation />        
        <BottomNav />
        </div>      
        <div className="display-on-phone">
        <PhoneNav />    
        </div>
        <hr />
        <BreadCrumbs 
            catName={props.catName}
        />
        <div className="displayImages">
            {items && items.map((item)=>{
                return(
                    <div className="imageContainer" onClick={()=>{
                        if (item.url) return window.location.href = item.url
                        }}
                    >
                        <img className="image" src={item.img} alt={item.alt} />
                        <div className="imageOverlay">
                            <p>{item.name}</p>
                            <p>{item.description}</p>
                        </div>
                    </div>
                )
            })
            }
        </div>
        </>        
    )
}