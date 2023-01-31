import React from "react";
import "./testimonials.css";
import AVTRI1 from "../../assets/avatar1.avif";
import AVTRI2 from "../../assets/avatar2.avif";
import AVTRI3 from "../../assets/avatar3.avif";
import AVTRI4 from "../../assets/avatar4.avif";

import { Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
    {
        avatar:AVTRI1,
        name: "Kwame Despite",
        review :"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
        avatar:AVTRI2,
        name: "Kwame Despite",
        review :"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
        avatar:AVTRI3,
        name: "Kwame Despite",
        review :"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
        avatar:AVTRI4,
        name: "Kwame Despite",
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
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
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