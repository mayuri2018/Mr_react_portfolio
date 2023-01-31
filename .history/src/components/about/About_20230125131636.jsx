import React from "react";
import "./about.css";
import ME from "../../assets/ME";
import{FaAward} from "react-icons/fa";
import{FiUsers} from "react-icons/fi";
import{VsFolderLibrary} from "react-icons/vsc";

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
                            <FaAward className="about_icon"/>
                            <h5>Experience</h5>
                            <small>4+ Years working</small>
                        </article>

                        <article className="about_card">
                            <FiUsers className="about_icon"/>
                            <h5>Clients</h5>
                            <small>5 Worldwide</small>
                        </article>

                        <article className="about_card">
                            <VsFolderLibrary className="about_icon"/>
                            <h5>Projects</h5>
                            <small>5+ Completed</small>
                        </article>
                    </div>
                    <p>
                        
                    </p>
                </div>
            </div>
        </section>
    )
}