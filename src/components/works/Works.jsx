import {React, useState} from "react";
import "./works.scss";
import {PhoneIphone, ArrowBackIos, ArrowForwardIos} from "@material-ui/icons"

export default function Works() {

    const [currentSlide, setCurrentSlide] = useState(0);

    const data = [
        {
            id: 1,
            title: "Featured Title 1",
            img: "https://source.unsplash.com/random",
            desc: "One Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia nisi et pulvinar fringilla."
        },
        {
            id: 2,
            title: "Featured Title 2",
            img: "https://res.cloudinary.com/dxyv6bnjd/image/upload/v1633118767/samples/ecommerce/leather-bag-gray.jpg",
            desc: "Two Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia nisi et pulvinar fringilla."
        },
        {
            id: 3,
            title: "Featured Title 3",
            img: "https://source.unsplash.com/random",
            desc: "Three Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia nisi et pulvinar fringilla."
        }
    ];

    // Slider
    const handleClick = (way)=>{
        way === "left-arrow" ? setCurrentSlide(currentSlide > 0 ? currentSlide-1 : 2) :
        setCurrentSlide(currentSlide < data.length -1 ? currentSlide + 1 : 0)
    };

    return (
        <div className="works" id="works">
            <div className="slider" style={{transform: `translateX(-${currentSlide * 100}vw)` }}>
                {data.map(d => (
                <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <PhoneIphone className="icon-phone"/>
                                </div>
                                <h2>{d.title}</h2>
                                <p>
                                 {d.desc}
                                </p>
                                <span>Projects</span>
                            </div>
                        </div>
                        <div className="right">
                            <img src={d.img} alt=""/>
                        </div> 
                    </div> 
                </div>))}
            </div>
            <ArrowBackIos className="arrow-left"  onClick={()=>handleClick("arrow-left")} />
            <ArrowForwardIos className="arrow-right" onClick={()=>handleClick("arrow-right")}/>
        </div>
    );
}