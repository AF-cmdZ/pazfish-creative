import {React, useState} from "react";
import "./contact.scss";
import {PersonPin} from "@material-ui/icons"


export default function Contact() {
    const [message, setMessage] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(true);
    }

    return (
        <div className="contact" id="contact">
            <div className="left">
                <PersonPin className="icon"/>
            </div>
            <div className="right">
                <h2>Contact Me</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Email" />
                    <textarea placeholder="Message"></textarea>
                    <button type="submit">Send</button>
                    {message && <span>Thanks, I will reply ASAP.</span>}
                </form>
            </div>
        </div>
    )
}