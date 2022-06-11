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
        return (
            <>
            <CategoryItem 
                catName="Generators"
                catImage={img}
                catAltText="Gasoline Engine for sale in kenya"
                catDescription="This are generators"
            /> 
            <div className="table">
                <h3>Gasoline 7.5hp Engines available</h3>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Model</th>
                        <th>Horse Power</th>
                        <th>Price</th>
                    </tr>
                    <tr>
                        <td>100 kva</td>
                    </tr>
                </table>
            </div>
            </>
        )
    }
    if (url()==="engines"){
        return <CategoryItem 
            catName="Engines"
            catDescription="This are now engines"
        />
    }

}

export default Category;