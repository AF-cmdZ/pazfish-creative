import React from "react";
import "./intro.scss";

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
                    <h2>Hello,</h2>
                    <h1>I'm Ashley Paz Fish</h1>
                    <h3><span></span></h3>
                </div>
            </div>
        </div>
    )
}