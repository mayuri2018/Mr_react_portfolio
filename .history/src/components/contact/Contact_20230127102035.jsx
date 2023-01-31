import React from "react";
import "./contact.css";
import MdOutlineEmail from 

export default function Contact(){
    return(
        <section id="contact">
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>
            <div className="container contact_container">
                <div className="contact_options">
                    <article className="contact_option">
                        <MdOutlineEmail/>
                        <h4>Email</h4>
                        <h5>mayuri.vijaya@gmail.com</h5>
                        <a href="mailto:mayuri.vijaya@gmail.com">Send a message</a>
                    </article>
                </div>
                {/*End of contact options*/}
            </div>
        </section>
    )
}