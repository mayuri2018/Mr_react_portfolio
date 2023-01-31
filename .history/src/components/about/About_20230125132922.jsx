import React from "react";
import "./about.css";
import ME from "../../assets/ME.jpeg";
import{FaAward} from "react-icons/fa";
import{FiUsers} from "react-icons/fi";
import{VscFolderLibrary} from "react-icons/vsc";

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
                            <VscFolderLibrary className="about_icon"/>
                            <h5>Projects</h5>
                            <small>5+ Completed</small>
                        </article>
                    </div>
                    <p>
                    Overall with 4 years of experience including design & developing for building websites. 
                    My experience in web design led me to learn technologies such as SEO, Google Analytics, 
                    Schema Markup and Wireframe.
                    Passionate about work in cross-functional teams and delivering the best solutions for customers. 
                    Currently working on web apps created on ReactJs, Redux, React-router, and Axios. 
                    Open for relocation and working as a front-end.
                    </p>
                    <a href="#contact" className="btn-primary">Let's Talk</a>
                </div>
            </div>
        </section>
    )
}