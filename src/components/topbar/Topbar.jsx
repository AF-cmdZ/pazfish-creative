import React from "react";
import "./topbar.scss";
import {Person, Mail} from "@material-ui/icons"

export default function Topbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={"topbar " + (menuOpen && "active") }>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo"><img src="assets/PazFish_Logo_2021_RGB.png" alt="logo" width="200"/></a>
                    <div className="itemContainer">
                        <Person className="icon"/>
                        <span>314-884-1873‬</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon"/>
                        <span>ashley.paz.fish@me.com</span>
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