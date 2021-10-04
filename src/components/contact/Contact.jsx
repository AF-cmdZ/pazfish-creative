import React from "react";
import "./contact.scss";
import {ConnectWithoutContact} from "@material-ui/icons"

export default function Contact() {
    return (
        <div className="contact" id="contact">
            <div className="left">
                <ConnectWithoutContact/>
            </div>
            <div className="right">
                <h2>Contact Me</h2>
                <form>
                    <input type="text" placeholder="Email" />
                </form>
            </div>
        </div>
    )
}