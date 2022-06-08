import Navigation from "./Navigation";


export function CategoryItem(props){
    return (
        <>
        <Navigation />
        <h4 className="text-center">{props.catName}</h4>
        {/* <img src={props.catImage} alt={props.catAltText} /> */}
        <p>{props.catDescription}</p>
        </>
    )
}
export default CategoryItem;