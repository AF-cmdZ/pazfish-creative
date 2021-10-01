import React from "react";
import "./portfolio.scss";

export default function Portfolio() {
    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                <li className="active">Featured</li>
                <li>Web Applications</li>
                <li>Design</li>
                <li>Point of Sale</li>
            </ul>

            <div className="container">
                <div className="item">
                    <img src="https://source.unsplash.com/random" alt="unsplash"/>
                    <h3>Working Title</h3>
                </div>
                <div className="item">
                    <img src="https://source.unsplash.com/random" alt="unsplash"/>
                    <h3>Working Title</h3>
                </div>
                <div className="item">
                    <img src="https://source.unsplash.com/random" alt="unsplash"/>
                    <h3>Working Title</h3>
                </div>
            </div>
        </div>
    )
}