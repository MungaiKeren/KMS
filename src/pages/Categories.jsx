import CategoryItem from "../component/CategoryItem"
import Footer from "../component/Footer";
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
            <hr />
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
                        <td>Japan electrical</td>
                        <td>Jec270</td>
                        <td>7.5 hp</td>
                        <td>12,500</td>
                    </tr>
                    <tr>
                        <td>Stallion Germany</td>
                        <td>SG250</td>
                        <td>7.5hp</td>
                        <td>12,500</td>
                    </tr>
                    <tr>
                        <td>Gilardoni Italy</td>
                        <td>GL275</td>
                        <td>7.5hp</td>
                        <td>12,500</td>
                    </tr>
                    <tr>
                        <td>Power Italia</td>
                        <td>R250</td>
                        <td>7.5hp</td>
                        <td>12,600</td>
                    </tr>
                    <tr>
                        <td>Carltons UK</td>
                        <td>C250</td>
                        <td>7.5hp</td>
                        <td>15,000</td>
                    </tr>
                </table>
            </div>
            <Footer />
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