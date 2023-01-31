import React from "react";
import "./footer.css";
import {FaFacebookF} from "react-icons/fa"

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
            <div className="footer_social">
                <a href="https://facebook.com"></a>
                <a href="https://instagram.com"></a>
                <a href="https://twitter.com"></a>
            </div>
        </footer>
    )
}