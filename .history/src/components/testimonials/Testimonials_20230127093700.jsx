import React from "react";
import "./testimonials.css";
import AVTRI1 from "../../assets/avatar1.jpg";
import AVTRI2 from "../../assets/avatar2.jpg";
import AVTRI3 from "../../assets/avatar3.jpg";
import AVTRI4 from "../../assets/avatar4.jpg";


export default function Testimonials(){
    return(
        <section id="testimonials">
            <h5>Review from clients</h5>
            <h2>Testimonials</h2>

            <div className="container testimonials_container">
                <article className="testimonial">
                    <div className="client_avatar">
                        <img src={AVTR1} alt="Avatar"/>
                    </div>
                    <h5 className="client_name">Ernest Achiever</h5>
                    <h5 className="client_name">Ernest Achiever</h5>
                    <small className="client_review">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.

                    </small>
                </article>
            </div>
        </section>
    )
}