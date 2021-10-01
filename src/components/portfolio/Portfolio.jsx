import { React, useState } from "react";
import "./portfolio.scss";
import PortfolioList from '../portfolioList/PortfolioList';

export default function Portfolio() {
    const [selected, setSelected] = useState("featured");
    
    const list = [
        {
            id: "featured",
            title: "Featured",
        },
        {
            id: "web",
            title: "Web Applications",
        },
        {
            id: "design",
            title: "Design",
        },
        {
            id: "pos",
            title: "Point of Sale",
        }
    ]

    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {list.map((item) => (
                    <PortfolioList 
                        title={item.title} 
                        active={ selected === item.id} 
                        setSelected={setSelected}
                        id={item.id}
                    />
                ))}
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