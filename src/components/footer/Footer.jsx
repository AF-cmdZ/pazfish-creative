import React from "react";
import "./footer.scss";

export default function Footer() {
    return (
        <div className="footer">
            <h2>Links</h2>
            <div>
                <ul id="links">
                    <li>tel: <a href="tel:+13148841873‬">314-884-1873‬</a></li>
                    <li>email: <a href="mailto:ashley.paz.fish@me.com">ashley.paz.fish@me.com</a></li>
                    <li><a href="https://github.com/AF-cmdZ" target="_blank" rel="noreferrer">GitHub</a></li>
                    <li><a href="https://www.linkedin.com/in/ashpazfish/" target="_blank" rel="noreferrer">LinkedIn</a></li>
                </ul>
            </div>
        </div>
    )
}