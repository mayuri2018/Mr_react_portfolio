import React from "react";
import "./footer.css";

export default function Footer(){
    return(
        <footer>
            <a href="#" className="footer_logo">EGATOR</a>
            <ul className="permalinks">
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#contacts">Contacts</a></li>
            </ul>
        </footer>
    )
}