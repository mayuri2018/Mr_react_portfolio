import React from "react";
import "./testimonials.css";
import AVTRI1 from "../../assets/avatar1.jpg";
import AVTRI2 from "../../assets/avatar2.jpg";
import AVTRI3 from "../../assets/avatar3.jpg";
import AVTRI4 from "../../assets/avatar4.jpg";

import { Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
    {
        avatar:AVTRI1,
        name: "Ramana Rao Boyalla",
        review :"hard worker & problem solver."
    },
    {
        avatar:AVTRI2,
        name: "Putin Sipani",
        review :"well organised person and friendly."
    },
    {
        avatar:AVTRI3,
        name: "Jazgul Ismailova",
        review :"Excellent organisational and time management skills."
    },
    {
        avatar:AVTRI4,
        name: "Michael Akampa",
        review :"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    }
]
export default function Testimonials(){
    return(
        <section id="testimonials">
            <h5>Review from clients</h5>
            <h2>Testimonials</h2>

            <Swiper className="container testimonials_container"
            // install Swiper modules
            modules={[Pagination]}
            spaceBetween={40}
            slidesPerView={1}
            pagination={{ clickable: true }}
            >
                {
                    data.map(({avatar,name,review},index) => {
                        return(
                            <SwiperSlide key={index} className="testimonial">
                                <div className="client_avatar">
                                    <img src={avatar} alt="Avatar"/>
                                </div>
                    <h5 className="client_name">{name}</h5>
                    <h5 className="client_name">Ernest Achiever</h5>
                    <small className="client_review">{review}</small>
                </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </section>
    )
}