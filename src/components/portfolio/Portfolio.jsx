import { React, useState, useEffect } from "react";
import "./portfolio.scss";
import PortfolioList from '../portfolioList/PortfolioList';
import { featuredPortfolio, webAppPortfolio, designPortfolio, posPortfolio} from "../../data.js";

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
                    {data.map((d) => (
                        <div className="item">
                    <img src={d.img} alt="unsplash"/>
                    <h3>{d.title}</h3>
                   
                </div> 
                ))}
            </div>
        </div>
    )
}