import React from "react";

import img1 from "../assets/Images/100KVA Carltons-UK(Cummins Engine).jpg"
import img2 from "../assets/Images/IMG-20220531-WA0009.jpg"
import img3 from "../assets/Images/SilentDieselGenerator GL1200ED.jpg"


const Cards = (props) => {
    return (
        <div className="cards">
            <div className="card">
                <div className="img-top">
                    <img src={props.img} height="300px" width="400px" alt={props.altText} />
                </div>
                <div className="card-body">
                    <span>
                        {props.cardBody}
                    </span>
                </div>
            </div>
        </div>
    )
}

export function Card(props){

    return (
        <div className="contents">
            <Cards 
                img={img1}
                cardBody="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled"
            />
            <Cards 
                img={img2}
                cardBody="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled"
            />
            <Cards 
                img={img3}
                cardBody="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled"
            />
        </div>
    )

}

export default Card;