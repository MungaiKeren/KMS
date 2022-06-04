import React, { useState } from "react";
import { send } from 'emailjs-com';
import Navigation from "../component/Navigation";
import Footer from "../component/Footer";

export function ContactUs(props){

    const [toSend, setToSend] = useState({
        from_name:"",
        message:"",
        reply_to:"",
    });

    const onSubmit = (e) => {
        // method to send the mail
        send(
            "service_6kalvjf",
            "template_go6pmr8",
            toSend,
            "G324Lxb7dLPP7HuDx"
        )
        .then((response) => {
            console.log("SUCCESSS!", response.status, response.text)
        })
        .catch((error)=>{
            console.log("FAILED!", error)
        });
    }

    const handleChange = (e) => {
        setToSend({...toSend, [e.target.name]:[e.target.value] });

    }

    return (
        <>
        <Navigation />
        <div className="contact">
            <h1>Reach out to us Now</h1>
            <div className="form">
                <form action="" onSubmit={onSubmit}>
                    <label htmlFor="Name">Your Name</label> <br />
                    <input 
                        type="text"
                        name="from_name"
                        placeholder="Enter your Name"
                        value={toSend.from_name}
                        onChange={handleChange}
                    /> <br />
                    <label htmlFor="email">Email Address</label> <br />
                    <input 
                        type="text"
                        name="reply_to"
                        placeholder="Your email"
                        value={toSend.reply_to}
                        onChange={handleChange}
                    /> <br />
                    <label htmlFor="message">Your Message</label> <br />
                    <textarea 
                        name="message"
                        cols="30"
                        rows="10"
                        value={toSend.message}
                        onChange={handleChange}
                    /> <br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
        <Footer />
        </>
    )
}

export default ContactUs;