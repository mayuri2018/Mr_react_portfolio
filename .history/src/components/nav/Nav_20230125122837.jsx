import React from "react";
import "./nav.css";
import {AiOutlineHome} from "react-icons/ai"
import {AiOutlineBiBook, BiBook} from "react-icons/Bi"
import {AiOutlineUser} from "react-icons/ai"
import {AiOutlineHome} from "react-icons/ai"
import {AiOutlineHome} from "react-icons/ai"
export default function Nav(){
    return(
        <nav>
            <a href="#"><AiOutlineHome/></a>
            <a href="#about"><AiOutlineUser/></a>
            <a href="#experience"><BiBook/></a>
            <a href="#services"><AiOutlineHome/></a>
            <a href="#contact"><AiOutlineHome/></a>
        </nav>
        
    )
}