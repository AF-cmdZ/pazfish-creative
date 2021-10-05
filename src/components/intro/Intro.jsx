import { React, useEffect, useRef } from "react";
import "./intro.scss";
import {KeyboardArrowDown} from "@material-ui/icons"
import { init } from "ityped";
import bioPic from "./assets/AshleyFish_bioPic_web_crop.jpg";

export default function Intro() {

    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            showCursor: false,
            typeSpeed:  130,
            backSpeed:  80,
            backDelay: 1500,
            strings: ["graphic designer", "web developer", "creative thinker"],
        });
    }, [])

    return (
        <div className="intro" id="intro">
                <div className="wrapper">
                    <div className="imgContainer">
                        <img src={bioPic} alt=""/>
                    </div>
                    <h3>Ashley Paz Fish</h3>
                    <h1><span ref={textRef}></span>&nbsp;</h1>
                    <p>I am a seasoned graphic designer and novice web developer. Paired with these complimentary skill sets, I can provide you with unique creative development in print, digital, or web.</p>
                </div>
                <a href="#portfolio" className="arrow">
                    <KeyboardArrowDown className="arrowDown"/>
                </a>
            </div>
    )
}