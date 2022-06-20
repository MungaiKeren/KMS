import BottomNav from "../../component/BottomNav";
import Footer from "../../component/Footer";
import Navigation from "../../component/Navigation";
import TopNav from "../../component/TopNav";
import BreadCrumbs from "../../component/Utils/BreadCrumbs";


export default function ElectricPWasher(props){
    return (
        <>
        <TopNav />
        <Navigation />
        <BottomNav />
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
            </table>
        </div>

        <Footer />
        </>
    )
}