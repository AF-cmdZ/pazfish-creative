import React from "react";
import "./header.scss";
import {Person, Mail} from "@material-ui/icons";
import Logo from "./assets/PazFish_Logo_2021_RGB.png";

export default function Topbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={"topbar " + (menuOpen && "active") }>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo"><img src={Logo} alt="logo" width="200"/></a>
                    <div className="itemContainer">
                        <Person className="icon"/>
                        <span><a href="tel:+13148841873‬">314-884-1873‬</a></span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon"/>
                        <span><a href="mailto:ashley.paz.fish@me.com">ashley.paz.fish@me.com</a></span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>        
                        <span className="line2"></span>        
                        <span className="line3"></span>        
                    </div>
                </div>
            </div>
        </div>
    )
}