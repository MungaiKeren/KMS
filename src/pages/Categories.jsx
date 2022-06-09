import CategoryItem from "../component/CategoryItem"
import img from "../assets/Images/GasolineEngine.png"

export function Category(props){

    // get url
    const url = () => {
        let url = window.location.href
        let pathname = new URL(url).pathname;
        let catUrl = pathname.split("/")
        return catUrl[2]
    }

    if (url() ==="generators"){
        return <CategoryItem 
            catName="Generators"
            catImage={img}
            catAltText="Gasoline Engine for sale in kenya"
            catDescription="This are generators"
        />
    }
    if (url()==="engines"){
        return <CategoryItem 
            catName="Engines"
            catDescription="This are now engines"
        />
    }

}

export default Category;