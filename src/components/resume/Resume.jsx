import React from "react";
import "./resume.scss";

export default function Resume() {
    return (
        <div className="resume" id="resume">
            <div className="resume-wrapper">
                <div className="resume-left">
                    <h2>
                        Education
                    </h2>
                    <div className="education">
                        <p className="date">
                        04/21—10/21
                        </p>
                        <p className="location">
                        Washington University Coding Boot Camp // St. Louis, MO
                        </p>
                        <p className="note">
                        Certification — Full Stack Web Development
                        </p>
                    </div>
                    <div className="education">
                        <p className="date">
                        06/13–10/14
                        </p>
                        <p className="location">
                        The Art Institute of Pittsburgh // Online Division
                        </p>
                        <p className="note">
                        Diploma of Web Design
                        </p>
                    </div>
                    <div className="education">
                        <p className="date">
                        09/02–06/06
                        </p>
                        <p className="location">
                        Savannah College of Art and Design // Savannah, GA
                        </p>
                        <p className="note">
                        Bachelor of Fine Arts // Graphic Design
                        </p>
                    </div>
                </div>
                <div className="resume-right">
                    <h2>
                        Work Experience
                    </h2>
                    <div className="job">
                        <p className="date">
                        05/16–Present
                        </p>
                        <p className="location">
                        Elsevier // St. Louis, MO
                        </p>
                        <p className="note">
                        Senior Design Manager
                        </p>
                    </div>
                    <div className="job">
                        <p className="date">
                        07/15–04/16
                        </p>
                        <p className="location">
                        CheckMark // St. Louis, MO
                        </p>
                        <p className="note">
                        Contract Graphic Designer
                        </p>
                    </div>
                    <div className="job">
                        <p className="date">
                        10/14–04/16
                        </p>
                        <p className="location">
                        Elsevier // St. Louis, MO
                        </p>
                        <p className="note">
                        Contract Graphic Designer
                        </p>
                    </div>
                    <div className="job">
                        <p className="date">
                        12/10–10/12
                        </p>
                        <p className="location">
                        PackagingArts // Mare Island, CA
                        </p>
                        <p className="note">
                        Contract Graphic Designer
                        </p>
                    </div>
                    <div className="job">
                        <p className="date">
                        07/09–10 /16
                        </p>
                        <p className="location">
                        Buffalo Jump Co. // Alton, IL
                        </p>
                        <p className="note">
                        Contract Graphic Designer
                        </p>
                    </div>
                    <div className="job">
                        <p className="date">
                        09/06–06/09
                        </p>
                        <p className="location">
                        McGowan Crain // St. Louis, MO
                        </p>
                        <p className="note">
                        Junior Art Director
                        </p>
                    </div>
                </div>
                <div className="pdf-right">
                    <a href="assets/PAZFISHresume2021.pdf" target="_blank">Download PDF Resume</a>
                </div>
            </div>
        </div>
    )
}