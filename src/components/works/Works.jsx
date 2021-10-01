import React from "react";
import "./works.scss";
import {PhoneIphone, ArrowBackIos, ArrowForwardIos} from "@material-ui/icons"

export default function Works() {

    const data = [
        
    ]

    return (
        <div className="works" id="works">
            <div className="slider">
                <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <PhoneIphone className="icon-phone"/>
                                </div>
                                <h2>Title</h2>
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia nisi et pulvinar fringilla. 
                                </p>
                                <span>Projects</span>
                            </div>
                        </div>
                        <div className="right">
                            <img src="https://source.unsplash.com/random" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
            <ArrowBackIos className="arrow-left"/>
            <ArrowForwardIos className="arrow-right"/>
        </div>
    );
}