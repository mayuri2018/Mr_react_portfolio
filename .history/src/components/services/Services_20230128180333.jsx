import React from "react";
import "./services.css";
import{BiCheck} from "react-icons/bi"

export default function Services(){
    return(
        <section id="services">
            <h5>What I Offer</h5>
            <h2>Services</h2>
            <div className="container services_container">
                <article className="service">
                    <div className="service_head">
                        <h3>UI/UX & Web design</h3>
                    </div>
                    <ul className="service_list">
                        <li>
                            <BiCheck className="service_list-icon"/>
                            <p>Design and maintenance of website</p>
                        </li>
                        <li>
                            <BiCheck className="service_list-icon"/>
                            <p>WordPress Support & Hosting</p>
                        </li>
                        <li>
                            <BiCheck className="service_list-icon"/>
                            <p>Logo Design & Ad Design </p>
                        </li>
                        <li>
                            <BiCheck className="service_list-icon"/>
                            <p>Search Engine Optimization (SEO) </p>
                        </li>
                        <li>
                            <BiCheck className="service_list-icon"/>
                            <p>Email Marketing, Copywriting, </p>
                        </li>
                        <li>
                            <BiCheck className="service_list-icon"/>
                            <p>Social Media Management</p>
                        </li>
                        <li>
                            <BiCheck className="service_list-icon"/>
                            <p>Coding webpages or entire websites</p>
                        </li>
                    </ul>
                </article>
                {/*End of UI/UX */}
                <article className="service">
                    <div className="service_head">
                        <h3>Frontend Development</h3>
                    </div>
                    <ul className="service_list">
                        <li>
                            <BiCheck className="service_list-icon"/>
                            <p>Optimizing the user experience</p>
                        </li>
                        <li>
                            <BiCheck className="service_list-icon"/>
                            <p>Creating Maintaining Mobile and Responsive Design</p>
                        </li>
                        <li>
                            <BiCheck className="service_list-icon"/>
                            <p>Developing Across Browsers</p>
                        </li>
                        <li>
                            <BiCheck className="service_list-icon"/>
                            <p>Built website interfaces with HTML,CSS,JavaScript & React.</p>
                        </li>
                        <li>
                            <BiCheck className="service_list-icon"/>
                            <p>Developed page layouts and navigation tools that met or exceeded user expectations.</p>
                        </li>
                        <li>
                            <BiCheck className="service_list-icon"/>
                            <p>Using APIs and RESTful Services</p>
                        </li>
                        <li>
                            <BiCheck className="service_list-icon"/>
                            <p>Translated UX and business requirements into elegant code solutions.</p>
                        </li>
                    </ul>
                </article>
                {/*End of Frontend */}
                <article className="service">
                    <div className="service_head">
                        <h3>FullStack Development</h3>
                    </div>
                    <ul className="service_list">
                        <li>
                            <BiCheck className="service_list-icon"/>
                            <p>Frontend Development.</p>
                        </li>
                        <li>
                            <BiCheck className="service_list-icon"/>
                            <p>Backend Development.</p>
                        </li>
                        <li>
                            <BiCheck className="service_list-icon"/>
                            <p>Developing both client and server software</p>
                        </li>
                        <li>
                            <BiCheck className="service_list-icon"/>
                            <p>UI/UX design</p>
                        </li>
                        
                    </ul>
                </article>
                {/*End of fullstack */}
            </div>
        </section>
    )
}