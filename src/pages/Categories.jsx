import React from "react";
import CategoryItem from "../component/CategoryItem";
import TopNav from "../component/TopNav";
import Footer from "../component/Footer";
import Content from "../component/Utils/Content";

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
import ePwasher4200 from "../assets/Images/ElectricPressureWasher4200PSL.jpg"
// import ePwasher3400 from "../assets/Images/ElectricPressureWasher3400PSL.jpg"
// import ePWasher2300 from "../assets/Images/ElectricPressureWasher3400PSL.jpg"

// farm tractor
import tractor from "../assets/Images/tractor.jpg"
import tractor2 from "../assets/Images/tractor2.jpg"

// lawn mower images
import lawnMower from "../assets/Images/lawnMower.jpg";
import mower from "../assets/Images/lawn-mower2.jpg";
import LawnMower from "../assets/Images/Lawn_Mower1.jpg";

// grass cutter images
import brushCutter from "../assets/Images/brushcutter2.jpg";


export default function Category(props){

    // get url
    const pathname = window.location.pathname.split("/")[2];

    const gen_desc = ["We all need power supply for various needs in our daily life. Getting good and reliable power is important. Thats why we do not take to chances when it comes to giving the best engines in the world.", "We have power generators with petrol engines and Deisel engines all suitable for a wide range of use. From a small house hold appliances to industrial and large scale use.", "Our leading brand with cummins engines is Carltons-UK,followed in consistently good performance by Power- Italia, Gilardoni, Hisaki, Aico Milano etc.    Get 12+2 months  warranty on any of our petrol powered power italia generators", "Get easy access  to spares and on time servicing of your generator purchased from us by our well trained experts.", "We also facilitate delivery at a small cost for all generator size. With Nairobi same day delivery and outside Nairobi and kenya, delivery is from 24hrs upon full payment."]
    const generatorsList = ["Relatively low maintenance.","Long durability","Safe storage","High power output","More rugged and reliable","Easy access to fuel."]


    return (
        <div>
            {pathname === "generators" && 
                (
                    <>
                    <TopNav />
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
                    <Content 
                        title="Generators."
                        p={gen_desc}
                        lists={generatorsList}
                    />
                    <Footer />
                   </>
                )
                
            }
            {pathname === "engines" && 
            <>
                <TopNav />
                <CategoryItem
                    catName="Engines"
                    catImage={gasolineEngine}
                    catAltText="GL27 Gasoline Engine available for sale in kenya"
                    name1="GL27"
                    moreDescription1="Gasoline Engine"
                    url="/category/engines/gasoline"

                    catImage2={carltonsuk}
                    catAltText2="carltons UK Gasoline engine for sale in Kenya"
                    name2="Electronic Ignition"
                    moreDescription2="Carltons UK Gasoline Engine 7.5 KVA C250"
                    // url="/category/engines/gasoline"

                    catImage3={gas2}
                    catAltText3="carltons UK Gasoline engine for sale in Kenya"
                    name3="Gasoline Engine For sale in Kenya"
                    moreDescription3="Carltons UK Gasoline Engine 7.5 KVA C250"

                    catImage4={gas3}
                    catAltText4="carltons UK Gasoline engine for sale in Kenya"
                    name4="Gasoline Engine For sale in Kenya"
                    moreDescription4="Carltons UK Gasoline Engine 7.5 KVA C250"
                />
                <Footer />
                </>
            }
            {pathname === "gardentools" && 
            <>
                <TopNav />
                <CategoryItem
                    catName="Garden Tools"
                    catImage={brushCutter}
                    catAltText="Brush Cutters for sale in kenya"
                    catDescription="Grass Cutter"
                    name1="Brush Cutters 8 in 1"
                    moreDescription1="Model: NTB 8:1 Multi tool Honda 8 in 1 attachments. Best for grass cutting, hedge trimming and tree cutting."

                    catImage2={lawnMower}
                    catAltText2="Lawn Mowers for sale in Kenya"
                    name2="Lawn Mower"
                    moreDescription2=""

                    catImage3={mower}
                    catAltText3="Lawn mowers for sale in Kenya"
                    name3 = "Lawn mowers available for sale in Kenya"
                    moreDescription3=""

                    catImage4={LawnMower}
                    catAltText4="Cheap affordable lawn mowers available for sale in Kenya"
                    name4="Lawn Mower available for sale in Kenya"
                    moreDescription4=""

                />
                <hr />
                <h4 style={{"fontSize":"20px", "textDecoration":"underline", "textAlign":"center"}}>Gilardoni Italy Products</h4>
                <h5 style={{"padding":"10px","marginLeft":"5em", "fontSize":"16px"}}>LAWN MOWER</h5>
                <div className="table">
                    <table>
                        <tr>
                            <th>Name/Model No.</th>
                            <th></th>
                            <th>Price in Ksh</th>
                        </tr>
                        <tr>
                            <td>RTLM18</td>
                            <td>18"</td>
                            <td>48,500</td>
                        </tr>
                        <tr>
                            <td>RTLM20</td>
                            <td>20"</td>
                            <td>54,000</td>
                        </tr>
                        <tr>
                            <td>RTLM21</td>
                            <td>21"</td>
                            <td>6,000</td>
                        </tr>
                    </table>
                </div>
                
                <hr />
                <h5 style={{"padding":"10px","marginLeft":"5em", "fontSize":"16px"}}>GRASS CUTTER</h5>
                <div className="table">
                    <table>
                        <tr>
                            <th>Name/Model</th>
                            <th>Type</th>
                            <th>Price</th>
                        </tr>
                        <tr>
                            <td>RT437B</td>
                            <td>4stroke</td>
                            <td>25,000</td>
                        </tr>
                        <tr>
                            <td>RTCG437</td>
                            <td>4stroke</td>
                            <td>24,500</td>
                        </tr>
                    </table>
                </div>

            <Footer />
            </>
            }
            {pathname === "pressurewasher" && 
                <>
                <TopNav />
                <CategoryItem
                    catName="Pressure Washer"
                    catImage={ePwasher4200}
                    catAltText="Petrol Pressure Washer for sale in kenya"
                    name1="Gasoline High PressureWasher"
                    moreDescription1="4200 PSL"

                    catImage2={pwasher}
                    catAltText2="Electric Pressure Washer available for sale in kenya"
                    name2="Electric Pressure Washer"
                    moreDescription2="4200PSL"
                />
                <div className="variations">
                    <p>2600ps</p>
                    <p>4200psl</p>
                    <p>4200psl</p>
                </div>
                <Footer />
                </>
            }
            {pathname === "farmtractors" && 
            <>
                <TopNav />
                <CategoryItem
                    catName="Farm Tractors"
                    catImage={tractor}
                    catAltText="Stallions Farm tractor available for sale in kenya"
                    catDescription="Farm Tractors"
                    name1="Stallions Farm Tractors Available"
                    moreDescription1=""

                    catImage2={tractor2}
                    catAltText2=""
                    name2="LevHart Farm tractors available for sale in Kenya"
                    moreDescription2=""
                />
                <hr />
                <h5 style={{"fontSize":"20px", "textAlign":"center", "textDecoration":"underline"}} >Farm Tractors available for sale in Kenya.</h5>
                <div className="table">
                    <table>
                        <tr>
                            <th>Name</th>
                            <th>HP</th>
                            <th>Model</th>
                            <th>Price</th>
                        </tr>
                        <tr>
                            <td>Stallions</td>
                            <td>14HP</td>
                            <td>SGE1500</td>
                            <td>185,000</td>
                        </tr>
                        <tr>
                            <td>Levhart</td>
                            <td>14 HP</td>
                            <td>LV1650E</td>
                            <td>195,000</td>
                        </tr>
                        <tr>
                            <td>Carltons</td>
                            <td>10HP</td>
                            <td>CUK1300D</td>
                            <td>135,000</td>
                        </tr>
                    </table>
                </div>
                <Footer />
                </>
            }
        </div>
    )
}