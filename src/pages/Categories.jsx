import CategoryItem from "../component/CategoryItem"
import Footer from "../component/Footer";
// generator images
import PowerItalia from "../assets/Images/PowerItaliaRT16800ED.jpg"
import Gilardoni from "../assets/Images/this-image.jpg"
import CarltonsUK from "../assets/Images/new.jpg"

// engine images
import gasolineEngine from "../assets/Images/GasolineEngine.png"

// garden tools images

// pressure washer images
import pwasher from "../assets/Images/PetrolPressureWasher2600PSL.jpg"

// farm tractor
import tractor from "../assets/Images/tractor.jpg"

// lawn mower images

// grass cutter images


export default function Category(props){

    // get url
    const pathname = window.location.pathname.split("/")[2];


    return (
        <div>
            {pathname === "generators" && 
                (
                    <>
                    <CategoryItem
                        catName="Generators"
                        catImage={PowerItalia}
                        catAltText="Diesel Engine for sale in kenya"
                        catDescription="This are generators"
                        name1="Power Italia Silent Air Cooled Diesel Generator (single phase)"

                        catImage2 = {Gilardoni}
                        catAltText2="Gilardoni Italy Silent Diesel Generators available for sale in kenya"
                        name2="Gilardoni Italy Silent Diesel Generators (GL1200ED)"

                        catImage3={CarltonsUK}
                        catAltText3="100KVA Carltons-UK (Cummins Engine)available for sale in kenya"
                        name3="100KVA Carltons-UK(Cummins Engine) SILENT WATER COOLED DIESEL GENERATOR (3PHASE)"
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
                    catImage={gasolineEngine}
                    catAltText="Gasoline Engine for sale in kenya"
                    catDescription="This are Engines"
                    name1="GL275 Gasoline Engine"
                />
            }
            {pathname === "gardentools" && 
                <CategoryItem
                    catName="Garden Tools"
                    catImage
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
                    catImage
                    catAltText="Lawn Mowers for sale in kenya"
                    catDescription="Farm Tractors"
                />
            }
            {pathname === "grasscutter" && 
                <CategoryItem
                    catName="Grass Cutter"
                    catImage
                    catAltText="Grass Cutter for sale in kenya"
                    catDescription="Grass Cutter"
                />
            }
        </div>
    )
}