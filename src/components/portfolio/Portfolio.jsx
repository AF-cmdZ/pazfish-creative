import { React, useState, useEffect } from "react";
import "./portfolio.scss";
import Project from '../project/Project.jsx';
import { featuredPortfolio, webAppPortfolio, designPortfolio, posPortfolio} from "../../data.js";
import {KeyboardArrowDown} from "@material-ui/icons"

export default function Portfolio() {
    const [selected, setSelected] = useState("featured");
    const [data, setData] = useState([]);
    
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

    useEffect(() => {
        switch(selected) {
            case "featured":
                setData(featuredPortfolio);
                break;
            case "web":
                setData(webAppPortfolio);
                break;
            case "design":
                setData(designPortfolio);
                break;
            case "pos":
                setData(posPortfolio);
                break;
            default: 
                setData(featuredPortfolio);
        };

    },[selected])

    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            {/* List of portfolio section names and project components*/}
            <ul>
                {list.map((item) => (
                    <Project
                        title={item.title} 
                        active={ selected === item.id} 
                        setSelected={setSelected}
                        id={item.id}
                    />
                ))}
            </ul>

            {/* Images below */}
            <div className="container">
                    {data.map((d) => (
                        <div className="item">
                    <img src={d.img} alt="unsplash"/>
                    <h3>{d.title}</h3>
                   
                </div> 
                ))}
            </div>

            <a href="#works" className="arrow2">
                    <KeyboardArrowDown className="arrowDown"/>
            </a>
        </div>
    )
}