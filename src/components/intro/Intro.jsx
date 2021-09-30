import React from "react";
import "./intro.scss";
import {KeyboardArrowDown} from "@material-ui/icons"

export default function Intro() {
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/AshleyFish_bioPic_web_crop.jpg" alt=""/>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h3>Ashley Paz Fish</h3>
                    <h1><span>graphic designer</span></h1>
                    <p>I am a seasoned graphic designer and novice web developer. Paired with these complimentary skill sets, I can provide you with unique creative development in print, digital, or web.</p>
                </div>
                <a href="#portfolio">
                    <KeyboardArrowDown/>
                </a>
            </div>
        </div>
    )
}