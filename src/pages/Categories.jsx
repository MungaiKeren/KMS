import CategoryItem from "../component/CategoryItem"
import Footer from "../component/Footer";
import img from "../assets/Images/GasolineEngine.png"
import tractor from "../assets/Images/tractor.jpg"
import pwasher from "../assets/Images/PetrolPressureWasher2600PSL.jpg"
import { useState } from "react";
import DieselGenerators from "./Generators/Diesel";


export default function Category(props){

    // get url
    const pathname = window.location.pathname.split("/")[2];
    const [subCat, setSubCategory] = useState([]);


    return (
        <div>
            {pathname === "generators" && 
                (
                    <>
                    <CategoryItem
                        catName="Generators"
                        catImage={img}
                        catAltText="Gasoline Engine for sale in kenya"
                        catDescription="This are generators"
                    />
                    <div className="table">
                        <h3>Power Italia Silent Air Cooled Diesel Generators <span>
                            (Single phase)</span> </h3>
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
            {pathname === "engines" && 
                <CategoryItem
                    catName="Engines"
                    catImage={img}
                    catAltText="Gasoline Engine for sale in kenya"
                    catDescription="This are Engines"
                />
            }
            {pathname === "gardentools" && 
                <CategoryItem
                    catName="Garden Tools"
                    catImage={img}
                    catAltText="Garden Tools for sale in kenya"
                    catDescription="This are Garden Tools"
                />
            }
            {pathname === "pressurewasher" && 
                <CategoryItem
                    catName="Pressure Washer"
                    catImage={pwasher}
                    catAltText="Pressure Washer for sale in kenya"
                    catDescription="Pressure Washer"
                />
            }
            {pathname === "farmtractors" && 
                <CategoryItem
                    catName="Farm Tractors"
                    catImage={tractor}
                    catAltText="Farm Tractors for sale in kenya"
                    catDescription="Farm Tractors"
                />
            }
            {pathname === "lawnmowers" && 
                <CategoryItem
                    catName="Lawn Mowers"
                    catImage={img}
                    catAltText="Lawn Mowers for sale in kenya"
                    catDescription="Farm Tractors"
                />
            }
            {pathname === "grasscutter" && 
                <CategoryItem
                    catName="Grass Cutter"
                    catImage={img}
                    catAltText="Grass Cutter for sale in kenya"
                    catDescription="Grass Cutter"
                />
            }
        </div>
    )


    //         <hr />
    //         
    //         </>
    //     )
    // }
    // if (url()==="engines"){
    //     return (
    //         <>
    //         <CategoryItem 
    //             catName="Engines"
    //             catDescription="This are now engines"
    //         />
    //         <div className="table">
    //             <h3>Gasoline 7.5hp Engines available</h3>
    //             <table>
    //                 <tr>
    //                     <th>Name</th>
    //                     <th>Model</th>
    //                     <th>Horse Power</th>
    //                     <th>Price</th>
    //                 </tr>
    //                 <tr>
    //                     <td>Japan electrical</td>
    //                     <td>Jec270</td>
    //                     <td>7.5 hp</td>
    //                     <td>12,500</td>
    //                 </tr>
    //                 <tr>
    //                     <td>Stallion Germany</td>
    //                     <td>SG250</td>
    //                     <td>7.5hp</td>
    //                     <td>12,500</td>
    //                 </tr>
    //                 <tr>
    //                     <td>Gilardoni Italy</td>
    //                     <td>GL275</td>
    //                     <td>7.5hp</td>
    //                     <td>12,500</td>
    //                 </tr>
    //                 <tr>
    //                     <td>Power Italia</td>
    //                     <td>R250</td>
    //                     <td>7.5hp</td>
    //                     <td>12,600</td>
    //                 </tr>
    //                 <tr>
    //                     <td>Carltons UK</td>
    //                     <td>C250</td>
    //                     <td>7.5hp</td>
    //                     <td>15,000</td>
    //                 </tr>
    //             </table>
    //         </div>
    //         </>
    //     )
    // }
    // if (url()===""){
        
    // }

}