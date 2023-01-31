import React from "react";
import "./header.css";
import CTA from "./CTA";

export default function Header(){
    return(
        <header>
            <div className="container header_container">
                <h5>Hello Im</h5>
                <h1>Mayuri Vaddempudi</h1>
                <h5 className="text-light">Fullstack Developer</h5>
                <CTA/>
            </div>
        </header>
        
    )
}