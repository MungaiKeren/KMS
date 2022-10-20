import BottomNav from "../../component/BottomNav";
import React from "react";
import Footer from "../../component/Footer";
import Navigation from "../../component/Navigation";
import TopNav from "../../component/TopNav";
import BreadCrumbs from "../../component/Utils/BreadCrumbs";
import Content from "../../component/Utils/Content";
import PhoneNav from "../../component/PhoneNav";


export default function ElectricPWasher(props){

    const p = ["The best machine keeps you in business, when it comes to car wash business. It is one of the fastest growing business with over 10,000 single business set in kenya alone.", "It has been one of the easiest employment for youths in kenya. From a small and not so busy car wash to the large and busiest,  you need the write machine.","We are the leading suppliers of the best electric and petrol powered car washing machines.", "Call or  send WhatsApp  message to talk to our experts to guide you on your purchase."]

    const lists = ["Accelerates the cleaning process.","More effective breaking up of lubricant residues.","Labour cost savings.","Shorter drying time.","Use less cleaning agent.","Germ-reducing effect.","Protection of delicate surface."]
    return (
        <>
        <TopNav />
        <div className="hide-on-phone">
        <Navigation />        
        <BottomNav />
        </div>      
        <div className="display-on-phone">
        <PhoneNav />    
        </div>
        <BreadCrumbs catName="Electric Pressure Washer"/>
        <h4 style={{"fontSize":"20px", "textAlign":"center", "textDecoration":"underline"}}>Electric Pressure Washer Availabe for sale in Kenya.</h4>
        
        <div className="table">
            <table>
                <tr>
                    <th>Name/Model</th>
                    <th>PSI</th>
                    <th>Price in Ksh</th>
                </tr>
                <tr>
                    <td>TM 1500A</td>
                    <td>1450psi</td>
                    <td>14,000</td>
                </tr>
                <tr>
                    <td>TM 1900A</td>
                    <td>1850psi</td>
                    <td>18,000</td>
                </tr>
                <tr>
                    <td>TM 2000B</td>
                    <td>2300psi</td>
                    <td>46,000</td>
                </tr>
                <tr>
                    <td>TM 2900B</td>
                    <td>3400psi</td>
                    <td>75,000</td>
                </tr>
                <tr>
                    <td>TM 3400B</td>
                    <td>4200psi</td>
                    <td>80,000</td>
                </tr>
                <tr>
                    <td>Pionner</td>
                    <td>3450psi</td>
                    <td>82,000</td>
                </tr>
                <tr>
                    <td>Pionner</td>
                    <td>2700psi</td>
                    <td>65,000</td>
                </tr>
                <tr>
                    <td>Pionner</td>
                    <td>2000psi</td>
                    <td>48,000</td>
                </tr>
                <tr>
                    <td>Karcher</td>
                    <td>HD5</td>
                    <td>130,000</td>
                </tr>
                <tr>
                    <td>Karcher</td>
                    <td>HD6</td>
                    <td>165,000</td>
                </tr>
            </table>
        </div>

        <Content 
            title="Car washing machines."
            p={p}
            listTitle="Advantages of car wash- High pressure washing machine."
            lists = {lists}
        />
        <Footer />
        </>
    )
}