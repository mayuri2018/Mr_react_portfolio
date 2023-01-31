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
                            <p>Designed navigation plans in collaboration with site managers, technical developers and other stakeholders.</p>
                        </li>
                        <li>
                            <BiCheck className="service_list-icon"/>
                            <p>Coding webpages or entire websites, meeting with clients to review website templates or refine their designs and running tests to preview layouts and website features.</p>
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
                        <li>
                            <BiCheck className="service_list-icon"/>
                            <p>Created clear icons, messaging, buttons and other UI elements for smartphones, tablets and web applications.</p>
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
                            <p>Developed wireframes, site maps and content inventories for new website designs.</p>
                        </li>
                        <li>
                            <BiCheck className="service_list-icon"/>
                            <p>Integrated web applications for mobile platforms into front end environment.</p>
                        </li>
                        <li>
                            <BiCheck className="service_list-icon"/>
                            <p>Planned website development, converting mockups into usable web presence with HTML, JavaScript, AJAX and JSON coding.</p>
                        </li>
                        <li>
                            <BiCheck className="service_list-icon"/>
                            <p>Built website interfaces with HTML and CSS.</p>
                        </li>
                        <li>
                            <BiCheck className="service_list-icon"/>
                            <p>Developed page layouts and navigation tools that met or exceeded user expectations.</p>
                        </li>
                        <li>
                            <BiCheck className="service_list-icon"/>
                            <p>Coded website using HTML, CSS, JavaScript and jQuery languages.</p>
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