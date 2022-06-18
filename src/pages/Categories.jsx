import CategoryItem from "../component/CategoryItem";
import Footer from "../component/Footer";
// generator images
import PowerItalia from "../assets/Images/PowerItaliaRT16800ED.jpg"
import Gilardoni from "../assets/Images/this-image.jpg"
import CarltonsUK from "../assets/Images/new.jpg"

// engine images
import gasolineEngine from "../assets/Images/GasolineEngine.png"
import carltonsuk from "../assets/Images/IMG-20220606-WA0004-removebg-preview (1) (1).jpg"
import gas2 from "../assets/Images/IMG-20220606-WA0003-removebg-preview (1).jpg"
import gas3 from "../assets/Images/IMG-20220606-WA0002-removebg-preview (1).jpg"

// garden tools images

// pressure washer images
import pwasher from "../assets/Images/PetrolPressureWasher2600PSL.jpg"
import pwasher2 from "../assets/Images/PetrolPressureWasher3200PSL.jpg"
import ePwasher4200 from "../assets/Images/ElectricPressureWasher4200PSL.jpg"
// import ePwasher3400 from "../assets/Images/ElectricPressureWasher3400PSL.jpg"
// import ePWasher2300 from "../assets/Images/ElectricPressureWasher3400PSL.jpg"

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
                        name3="100KVA Carltons-UK(Cummins Engine) Diesel Generator (3PHASE)"
                    />
                    <Footer />
                   </>
                )
                
            }
            {pathname === "engines" && 
                <CategoryItem
                    catName="Engines"
                    catImage={gasolineEngine}
                    catAltText="GL27 Gasoline Engine available for sale in kenya"
                    name1="GL27"
                    moreDescription1="Gasoline Engine"

                    catImage2={carltonsuk}
                    catAltText2="carltons UK Gasoline engine for sale in Kenya"
                    name2="Electronic Ignition"
                    moreDescription2="Carltons UK Gasoline Engine 7.5 KVA C250"

                    catImage3={gas2}
                    catAltText3="carltons UK Gasoline engine for sale in Kenya"
                    name3="Gasoline Engine For sale in Kenya"
                    moreDescription3="Carltons UK Gasoline Engine 7.5 KVA C250"

                    catImage4={gas3}
                    catAltText4="carltons UK Gasoline engine for sale in Kenya"
                    name4="Gasoline Engine For sale in Kenya"
                    moreDescription4="Carltons UK Gasoline Engine 7.5 KVA C250"
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
                <>
                <CategoryItem
                    catName="Pressure Washer"
                    catImage={pwasher}
                    catAltText="Petrol Pressure Washer for sale in kenya"
                    name1="Gasoline High PressureWasher"
                    moreDescription1="2600PSL"
                />
                <div className="variations">
                    
                </div>
                </>
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