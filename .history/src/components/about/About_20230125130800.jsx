import React from "react";
import "./about.css";
import ME from "../../assets/ME";

export default function About(){
    return(
        <section id="about">
            <h5>Get To Know</h5>
            <h2>About Me</h2>
            <div className="container about_container">
                <div className="about_me">
                    <div className="about_me-image">
                        <img src={ME} alt="About-image"/>
                    </div>
                </div>

                <div className="about_content">
                    <div className="about_cards">
                        <article className="about_card">
                            <h5>Experience</h5>
                            <small>4+ Years working</small>
                        </article>

                    </div>
                </div>
            </div>
        </section>
    )
}