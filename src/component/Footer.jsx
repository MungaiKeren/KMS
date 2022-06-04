import React from "react";
import logo from '../assets/Images/logo.png'

export function Footer(props){
    return (
        <>
        <div className="footer">
            <div className="row">
                <div className="col1">
                    <img src={logo} height="" width="" alt="Kenya machinery service" />
                    <h4>Kenya Machinery Services</h4>
                </div>
                <div className="col2">
                    <h4>Quick links</h4>
                    <ul>
                        <li onClick={()=>{
                            window.location.href="/"
                        }}>Home</li>
                        <li onClick={()=>{
                            window.location.href = "/about/"
                        }}>About Us</li>
                        <li onClick={()=>{
                            window.location.href = "/services/"
                        }} >Services</li>
                        <li onClick={()=>{
                            window.location.href = "/contact/"
                        }} >Contact Us</li>
                    </ul>
                </div>
                <div className="col3">
                    <h4>Connect with us</h4>
                    <p>Bamburi Road off enterprise road.</p>
                    <p>
                        <i className="fas fa-phone"></i> &nbsp;
                        0706 367 488
                    </p>
                    <i className="fab fa-whatsapp-square"></i> &nbsp;
                    <i className="fab fa-facebook-square"></i> &nbsp;
                    <i className="fab fa-instagram-square"></i> &nbsp;
                </div>
            </div>
            <hr />
            <div className="bottom">
                <p>Copyright@2022 Kenya Machinery Services. All rights reserved.</p>
            </div>
        </div>
        </>
    )
};

export default Footer;