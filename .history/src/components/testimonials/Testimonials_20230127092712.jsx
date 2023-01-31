import React from "react";
import "./testimonials.css";

export default function Testimonials(){
    return(
        <section id="testimonials">
            <h5>Review from clients</h5>
            <h2>Testimonials</h2>

            <div className="container testimonials_container">
                <article className="testimonial">
                    <div className="client_avatar">
                        <img src={AVTRI} alt="Avatar"/>
                        <h5 className="client_name">Ernest Achiever</h5>
                        <small className="client_review">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.

                        </small>
                    </div>
                </article>

            </div>
        </section>
    )
}