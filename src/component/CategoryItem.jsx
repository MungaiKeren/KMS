import BottomNav from "./BottomNav";
import Navigation from "./Navigation";
import {MdChevronRight} from 'react-icons/md'


export function CategoryItem(props){
    return (
        <>
        <Navigation />
        <BottomNav />
        <hr />
        <div className="breadcrumbs">
            <span>{props.catName} for sale in Kenya.</span>
            <p>Home <MdChevronRight /> <span>{props.catName}</span> </p>
        </div>
        <h4 className="text-center">{props.catName}</h4>
        <div className="displayImages">
            <img src={props.catImage} alt={props.catAltText} />
        </div>
        <p>{props.catDescription}</p>
        </>
    )
}
export default CategoryItem;