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
                            <p>Responsible for designing overall layout and aesthetic for websites.</p>
                        </li>
                        <li>
                            <BiCheck className="service_list-icon"/>
                            <p>My duties include coding webpages or entire websites, meeting with clients to review website templates or refine their designs and running tests to preview layouts and website features.</p>
                        </li>
                        <li>
                            <BiCheck className="service_list-icon"/>
                            <p>Assisted throughout all stages of design process from concept to collaborating with back end developers.</p>
                        </li>
                        <li>
                            <BiCheck className="service_list-icon"/>
                            <p>Collaborated with cross-functional teams such as Design, Development, Program Management, Marketing Research, and Analytics to develop user-centered designs and features.</p>
                        </li>
                        <li>
                            <BiCheck className="service_list-icon"/>
                            <p>Advised clients throughout creation and development processes, leveraging end-user feedback for application improvements.</p>
                        </li>
                        <li>
                            <BiCheck className="service_list-icon"/>
                            <p>Designed marketing materials such as logos, brochures, newsletters, infographics, presentations, and advertisements. Drafted detailed app and website prototypes, generating specifications in alignment with client visions.</p>
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
                            <p>Passionate about work in cross-functional teams and delivering the best solutions for customers.</p>
                        </li>
                        <li>
                            <BiCheck className="service_list-icon"/>
                            <p>Passionate about work in cross-functional teams and delivering the best solutions for customers.</p>
                        </li>
                        <li>
                            <BiCheck className="service_list-icon"/>
                            <p>Passionate about work in cross-functional teams and delivering the best solutions for customers.</p>
                        </li>
                        <li>
                            <BiCheck className="service_list-icon"/>
                            <p>Passionate about work in cross-functional teams and delivering the best solutions for customers.</p>
                        </li>
                        <li>
                            <BiCheck className="service_list-icon"/>
                            <p>Passionate about work in cross-functional teams and delivering the best solutions for customers.</p>
                        </li>
                        <li>
                            <BiCheck className="service_list-icon"/>
                            <p>Passionate about work in cross-functional teams and delivering the best solutions for customers.</p>
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
                            <p>Passionate about work in cross-functional teams and delivering the best solutions for customers.</p>
                        </li>
                        <li>
                            <BiCheck className="service_list-icon"/>
                            <p>Passionate about work in cross-functional teams and delivering the best solutions for customers.</p>
                        </li>
                        <li>
                            <BiCheck className="service_list-icon"/>
                            <p>Passionate about work in cross-functional teams and delivering the best solutions for customers.</p>
                        </li>
                        <li>
                            <BiCheck className="service_list-icon"/>
                            <p>Passionate about work in cross-functional teams and delivering the best solutions for customers.</p>
                        </li>
                        <li>
                            <BiCheck className="service_list-icon"/>
                            <p>Passionate about work in cross-functional teams and delivering the best solutions for customers.</p>
                        </li>
                        <li>
                            <BiCheck className="service_list-icon"/>
                            <p>Passionate about work in cross-functional teams and delivering the best solutions for customers.</p>
                        </li>
                    </ul>
                </article>
                {/*End of fullstack */}
            </div>
        </section>
    )
}