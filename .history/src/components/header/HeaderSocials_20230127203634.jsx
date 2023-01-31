import React from "react";
import {BsLinkedin} from "react-icons/bs";
import {BsGithub} from "react-icons/bs";
import {FaDribbble} from "react-icons/fa";

export default function HeaderSocials(){
    return(
        <div className="header_socials">
            <a href="https://www.linkedin.com/in/mayuri-vaddempudi/" target="_blank"><BsLinkedin/></a>
            <a href="https://github.com/mayuri2018" target="_blank"><BsGithub/></a>
            <a href="https://dribble.com" target="_blank"><FaDribbble/></a>
        </div>
    )
}