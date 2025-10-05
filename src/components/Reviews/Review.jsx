import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import profile1 from "../../assets/images/profile1.jpg";
import profile2 from "../../assets/images/profile2.jpg";
import profile3 from "../../assets/images/profile3.jpg";
import ReviewChild from "./ReviewChild";

const Review = () => {
  const reviewData = [
    {
      img: profile1,
      name: "Clay Jhonson",
      role: "Digital Marketer",
      title: "Perfection! went above!",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames amet dictumst justo, viverra enim egestas. Habitant turpis at adipiscing.",
      rating: 4,
    },
    {
      img: profile2,
      name: "Nina Sin",
      role: "Film Maker",
      title: "Perfection! went above!",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames amet dictumst justo, viverra enim egestas. Habitant turpis at adipiscing.",
      rating: 5,
    },
    {
      img: profile3,
      name: "Rose Merry",
      role: "Developer",
      title: "Perfection! went above!",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames amet dictumst justo, viverra enim egestas. Habitant turpis at adipiscing.",
      rating: 4,
    },
    {
      img: profile1,
      name: "Clay Jhonson",
      role: "Digital Marketer",
      title: "Perfection! went above!",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames amet dictumst justo, viverra enim egestas. Habitant turpis at adipiscing.",
      rating: 4,
    },
    {
      img: profile2,
      name: "Nina Sin",
      role: "Film Maker",
      title: "Perfection! went above!",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames amet dictumst justo, viverra enim egestas. Habitant turpis at adipiscing.",
      rating: 5,
    },
    {
      img: profile3,
      name: "Rose Merry",
      role: "Developer",
      title: "Perfection! went above!",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames amet dictumst justo, viverra enim egestas. Habitant turpis at adipiscing.",
      rating: 4,
    },
  ];

  return (
    <div className="reviewSection">
      <div className="postheader">
        <h1 className="sectionTitle">Check out Recent Review</h1>
        <p className="subTitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan
          neque pellentesque lorem eu sollicitudin congue ut amet.
        </p>
      </div>

      <div className="reviewSlider">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          speed={600}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            1440: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1200: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            992: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            576: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
          }}
        >
          {reviewData.map((user, index) => (
            <SwiperSlide key={index}>
              <ReviewChild user={user} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Review;
