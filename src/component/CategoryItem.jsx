import React from "react";
import BottomNav from "./BottomNav";
import Navigation from "./Navigation";
import BreadCrumbs from "./Utils/BreadCrumbs";


export default function CategoryItem(props){
    const items = props.items

    console.log(items);

    return (
        <>
        <Navigation />
        <BottomNav />
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