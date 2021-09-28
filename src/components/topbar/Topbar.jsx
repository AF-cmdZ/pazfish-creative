import React from "react";
import "./topbar.scss";

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="wrapper">
                <div className="left">
                    <a href="#intro">Intro</a>
                </div>
                <h1>Paz Fish Creative</h1>
                <div className="right">This is right</div>
            </div>
        </div>
    )
}