import BottomNav from "./BottomNav";
import Navigation from "./Navigation";
import {MdChevronRight} from 'react-icons/md'


export default function CategoryItem(props){
    return (
        <>
        <Navigation />
        <BottomNav />
        <hr />
        <div className="breadcrumbs">
            <span id="span">{props.catName} for sale in Kenya.</span>
            <p>Home <MdChevronRight size={15} /> <span id="catname">{props.catName}</span> </p>
        </div>
        <div className="displayImages">
            <img id="img" src={props.catImage} alt={props.catAltText} />
        </div>
        <p>{props.catDescription}</p>
        </>        
    )
}