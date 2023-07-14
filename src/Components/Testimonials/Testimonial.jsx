import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import naruto1 from "../../img/naruto1.jpg";
import naruto from "../../img/naruto.jpg";
import profile11 from "../../img/profile11.png";
import onepiece from "../../img/onepiece.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: naruto1,
      review:
      "I had the pleasure of working with Bharath on a complex web development project, and I was blown away by their technical expertise and problem-solving skills. Always kept me informed throughout the process.", 
    },
    {
      img: onepiece,
      review:
      "I approached Bharath to fix some bugs on my existing website, and they were able to quickly identify and solve the issues. Their communication skills and ability to work efficiently under pressure were impressive.",   

    },
    {
      img: profile11,
      review:
      "Working with Bharath was a great experience. They were able to take my vague ideas and turn them into a beautiful and functional website. They were always willing to make changes and revisions until I was completely satisfied with the end result.",

     },
    {
      img: naruto,
      review:
      "I highly recommend Bharath for any web development needs. They are a true expert in their field, with a deep understanding of the latest web technologies and best practices. They were able to take my vision for a new website and turn it into a reality.", 
    },
  ];

  return (
    <div className="t-wrapper" id="Testimonial">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;