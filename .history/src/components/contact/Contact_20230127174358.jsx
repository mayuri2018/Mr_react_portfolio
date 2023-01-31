import React from "react";
import "./contact.css";
import {MdOutlineEmail} from "react-icons/md";
import {BsWhatsapp} from "react-icons/bs";
import { useRef } from 'react';
import emailjs from "emailjs-com";

export default function Contact(){
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_lylxh9j', 'template_tc7efmf', form.current, 'Myij3i_RPH-RXJ2LB')
         e.target.reset()
      };
    
    return(
        <section id="contact">
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>
            <div className="container contact_container">
                <div className="contact_options">
                    <article className="contact_option">
                        <MdOutlineEmail className="contact_option-icon"/>
                        <h4>Email</h4>
                        <h5>mayuri.vijaya@gmail.com</h5>
                        <a href="mailto:mayuri.vijaya@gmail.com">Send a message</a>
                    </article>
                    <article className="contact_option">
                        <BsWhatsapp className="contact_option-icon"/>
                        <h4>WhatsApp</h4>
                        <h5>+46727711556</h5>
                        <a href="https://api.whatsapp.com/send?phone+46727711556" target="_blank">Send a message</a>
                    </article>
                </div>
                {/*End of contact options*/}
                <form ref={form} onSubmit>
                    <input type="text" name="name" placeholder="Your full Name" required/>
                    <input type="email" name="email" placeholder="Your Email" required/>
                    <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
                    <button type="submit" className="btn btn-primary">Send Message</button>

                </form>
            </div>
        </section>
    )
}