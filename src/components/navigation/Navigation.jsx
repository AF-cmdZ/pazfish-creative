import React from "react";
import "./navigation.scss";
import resume from "../../assets/PAZFISHresume2021.pdf";

export default function Menu({ menuOpen, setMenuOpen }) {
    return (
        <div className={"menu " + (menuOpen && "active")}>
           <ul>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#intro">Home</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#portfolio">Portfolio</a>
                </li>
                {/* <li onClick={()=>setMenuOpen(false)}>
                    <a href="#works">Works</a>
                </li> */}
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#resume">Resume</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#contact">Contact</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href={resume} target="blank">Download PDF Resume</a>
                </li>
            </ul>
        </div>
    )
}