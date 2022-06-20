import BottomNav from "./BottomNav";
import Navigation from "./Navigation";
import {MdChevronRight} from 'react-icons/md'
import BreadCrumbs from "./Utils/BreadCrumbs";


export default function CategoryItem(props){

    return (
        <>
        <Navigation />
        <BottomNav />
        <hr />
        <BreadCrumbs 
            catName={props.catName}
        />
        <div className="displayImages">
            <div className="imageContainer" onClick={()=>{
                if (props.url) return window.location.href = props.url
            }}>
                <img src={props.catImage} alt={props.catAltText} />
                <div className="imageOverlay">
                    <p>{props.name1}</p>
                    <p>{props.moreDescription1}</p>
                </div>
            </div>
            <div className="imageContainer" onClick={()=>{
                if (props.url) return window.location.href = props.url
            }}>
                <img src={props.catImage2} alt={props.catAltText2} />
                <div className="imageOverlay">
                    <p>{props.name2}</p>
                    <p>{props.moreDescription2}</p>              
                </div>
            </div>
            <div className="imageContainer" onClick={()=>{
                if (props.url) return window.location.href = props.url
            }}>
                <img src={props.catImage3} alt={props.catAltText3} />
                <div className="imageOverlay">
                    <p>{props.name3}</p>
                    <p>{props.moreDescription3}</p>
                </div>
            </div>
            <div className="imageContainer" onClick={()=>{
                if (props.url) return window.location.href = props.url
            }}>
                <img src={props.catImage4} alt={props.catAltText4} />
                <div className="imageOverlay">
                    <p>{props.name4}</p>
                    <p>{props.moreDescription4}</p>
                </div>
            </div>
        </div>
        </>        
    )
}