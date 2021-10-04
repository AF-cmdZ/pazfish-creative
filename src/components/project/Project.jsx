import React from "react";
import "./project.scss";

export default function Project({id, title, active, setSelected}) {
    return (
        <div className={active ? "project active" : "project"}
        onClick={()=>setSelected(id)}>
            {title}
        </div>
    )
}