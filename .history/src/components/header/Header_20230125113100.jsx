import React from "react";
import "./header.css";
import ME from "../../assets/ME.png";
import CTA from "./CTA";

export default function Header(){
    return(
        <header>
            <div className="container header_container">
                <h5>Hello I'm</h5>
                <h1>Mayuri Vaddempudi</h1>
                <h5 className="text-light">Fullstack Developer</h5>
                <CTA/>
                <div className="me">
                    <img src={ME} alt="me"/>
                </div>
                <a href="#contact" className="scroll_down">Scroll Down</a>
            </div>
        </header>
        
    )
}