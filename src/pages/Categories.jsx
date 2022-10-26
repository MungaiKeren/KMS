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


// lawn mower images
import lawnMower from "../assets/Images/lawnMower.jpg";
import manyLM from "../assets/Images/manyLawnMowers.jpg"
import mower from "../assets/Images/lawn-mower2.jpg";
import LawnMower from "../assets/Images/Lawn_Mower1.jpg";
import newLM from "../assets/Images/new_lawnmower.jpg"

// grass cutter images
import brushCutter from "../assets/Images/brushcutter2.jpg";

//farm tractor images
import hayBaler from "../assets/Images/HayBaler.jpeg";
import masseyFurgerson from "../assets/Images/MasseyFurgerson.jpg";
import threeRowRidger from "../assets/Images/threeRowRidger2.jpeg";
import hayBaler2 from "../assets/Images/HayBaler2.jpeg";
import hayBaler3 from "../assets/Images/HayBaler3.jpeg";
import hayBaler4 from "../assets/Images/HayBaler4.jpeg"


export default function Category(props){

    // get url
    const pathname = window.location.pathname.split("/")[2];

    const generatorItems = [
        {img: PowerItalia, alt: "Diesel Engine for sale in kenya", name: "Power Italia Generator", description: "Power Italia Silent Air Cooled Diesel Generator (single phase)"},
        {img:Gilardoni, alt:"Gilardoni Italy Silent Diesel Generators available for sale in kenya", name: "Gilardoni Italy Silent Diesel Generators (GL1200ED)", description: ""},
        {img: CarltonsUK, alt:"100KVA Carltons-UK (Cummins Engine)available for sale in kenya", name: "100KVA Carltons-UK (Cummins Engine)", description: ""}

    ]

    const engineItems=[
        {img:gasolineEngine, alt:"GL27 Gasoline Engine available for sale in kenya", name: "GL27", description: "", url:"/category/engines/gasoline"},
        {img: carltonsuk, alt: "carltons UK Gasoline engine for sale in Kenya", name: "Electronic Ignition", description:"Carltons UK Gasoline Engine 7.5 KVA C250"},
        {img: gas2, alt: "carltons UK Gasoline engine for sale in Kenya", name: "Gasoline Engine For sale in", description: "Carltons UK Gasoline Engine 7.5 KVA C250"},
        {img: gas3,alt:"carltons UK Gasoline engine for sale in Kenya", name: "Gasoline Engine", description: "Carltons UK Gasoline Engine 7.5 KVA C250"},
    ]

    const gardenToolsItems = [
        {img: lawnMower, alt:"Lawn Mowers for sale in Kenya",name:"Lawn Mower", description:"Lawn Mower"},
        {img: brushCutter, alt:"Brush Cutters for sale in Kenya",name:"Brush Cutters 8 in 1", description: "Model: NTB 8:1 Multi tool Honda 8 in 1 attachments. Best for grass cutting, hedge trimming and tree cutting."},
        {img: mower, alt:"Lawn Mower for sale in Nairobi",name:"Lawn Mower", description:"Lawn Mower"},
        {img: LawnMower, alt:"lawn mowers availble for sale",name:"Lawn Mower",description:"Lawn Mower"},
        {img: manyLM, alt: "Lawn mowers available for sale in kenya", name: "", description: ""},
        {img: newLM, alt:"Lawm mower", name: "", description: ""}
    ]

    const pwasherItems = [
        {img: pwasher, alt:"Electric Pressure Washer available for sale in kenya", name: "Electric Pressure Washer", description: "4200PSI"},
        {img: ePwasher4200, alt: "Petrol Pressure washer availble for sale in Kenya", name: "Gasoline High PressureWasher", description: "4200PSI"}
    ]

    const farmTractorItems = [
        {img: hayBaler, alt: "Haybaler available for sale in Kenya", name: "Hay Baler", description: ""},
        {img:masseyFurgerson, alt: "Massey Furgerson available for sale in Kenya", name: "Massey Furgerson Farm Tractor", description: ""},
        {img: threeRowRidger, alt: "Three Row Ridger available for sale in kenya", name:"Massey Furgerson Three Row Ridger", description: "Ksh 185,000"},
        {img:hayBaler2, alt: "Hay Baler", name: "Haybaler", description: ""},
        {img:hayBaler3, alt: "Hay Baler", name: "Haybaler", description: ""},
        {img:hayBaler4, alt: "Hay Baler", name: "Haybaler", description: ""},
    ]

    // generators descriptions
    const gen_desc = ["We all need power supply for various needs in our daily life. Getting good and reliable power is important. Thats why we do not take to chances when it comes to giving the best engines in the world.", "We have power generators with petrol engines and Deisel engines all suitable for a wide range of use. From a small house hold appliances to industrial and large scale use.", "Our leading brand with cummins engines is Carltons-UK,followed in consistently good performance by Power- Italia, Gilardoni, Hisaki, Aico Milano etc.    Get 12+2 months  warranty on any of our petrol powered power italia generators", "Get easy access  to spares and on time servicing of your generator purchased from us by our well trained experts.", "We also facilitate delivery at a small cost for all generator size. With Nairobi same day delivery and outside Nairobi and kenya, delivery is from 24hrs upon full payment."]
    const generatorsList = ["Relatively low maintenance.","Long durability","Safe storage","High power output","More rugged and reliable","Easy access to fuel."]

    // pressure washer descriptions
    const pressure_desc = ["The best machine keeps you in business, when it comes to car wash business. It is one of the fastest growing business with over 10,000 single business set in kenya alone.", "It has been one of the easiest employment for youths in kenya. From a small and not so busy car wash to the large and busiest,  you need the right machine.","We are the leading suppliers of the best electric and petrol powered car washing machines.", "Call or  send a WhatsApp  message to talk to our experts to guide you on your purchase."]
    const pressure_lists = ["Better option where alternative or back-up power will be used infrequently or temporarily.", "Petrol generators are less expensive","More effective breaking up of lubricant residues.","Labour cost savings.","Shorter drying time.","Use less cleaning agent.","Germ-reducing effect.","Protection of delicate surfaces.", " Produce less harmful carbon dioxide fumes."]

    const hayBaler_desc = [
        "A baler or hay baler is a piece of farm machinery used to compress cut and raked crops such as hay, cotton, rice straw, wheat straw, or silage into compact bales that are easy to handle, transport, and store. ",

        "We offer the best balers suitable for your farm work at very affordable prices in the market. ",
        
        "We also do delivery at a small fee in all reguons in kenya , East Africa and Africa at large"
    ]

    return (
        <div>
            {pathname === "generators" && 
                (
                    <>
                    <TopNav />
                    <CategoryItem 
                        catName="Generators"
                        items={generatorItems}
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
                    items={engineItems}
                />
                <Footer />
                </>
            }
            {pathname === "gardentools" && 
            <>
                <TopNav />
                <CategoryItem
                    catName="Garden Tools"
                    items={gardenToolsItems}
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
                            <td>60,000</td>
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
                    items={pwasherItems}
                />
                <div className="variations" style={{"textAlign": "center"}}>
                    <h3>Variations</h3>
                    <p>2600PSI</p>
                    <p>4200PSI</p>
                </div>
                <Content 
                    title="Pressure Washer."
                    p={pressure_desc}
                    listTitle="The main advantages of Petrol generators are;"
                    lists={pressure_lists}
                />
                <Footer />
                </>
            }
            {pathname === "farmtractors" && 
            <>
                <TopNav />
                <CategoryItem
                    catName="Farm Tractors"
                    title="Farm Tractors."
                    items={farmTractorItems}
                />
                <Content 
                    title="Hay Baler"
                    p={hayBaler_desc}
                />
                <hr />
                <h5 style={{"fontSize":"20px", "textAlign":"center", "textDecoration":"underline"}} >Hay Baler Prices</h5>
                <div className="table">
                    <table>
                        <tr>
                            <th>Name</th>
                            <th>Bales/day</th>
                            <th>Price</th>
                        </tr>
                        <tr>
                            <td>Claas 55 or 65</td>
                            <td>300 bales per day</td>
                            <td>1.5 million</td>
                        </tr>
                        <tr>
                            <td>International 552 </td>
                            <td>Capacity 2700 bales</td>
                            <td>980,000</td>
                        </tr>
                        <tr>
                            <td>John Deere 346</td>
                            <td>Capacity 2700 bales</td>
                            <td>1,200,000</td>
                        </tr>
                    </table>
                </div>
                <h5 style={{"fontSize":"20px", "textAlign":"center", "textDecoration":"underline"}} >Farm Tractors Prices</h5>
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
                            <td>195,000</td>
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
                        <tr>
                            <td>Jiadong</td>
                            <td>18HP</td>
                            <td>YB-151</td>
                            <td>345,000</td>
                        </tr>
                        <tr>
                            <td>Massey ferguson</td>
                            <td>375HP</td>
                            <td>MF 375</td>
                            <td>2,850,000</td>
                        </tr>
                        <tr>
                            <td>Massey ferguson</td>
                            <td>380 HP</td>
                            <td>MF 380</td>
                            <td>3,500,000</td>
                        </tr>
                    </table>
                </div>
                <Footer />
                </>
            }
        </div>
    )
}