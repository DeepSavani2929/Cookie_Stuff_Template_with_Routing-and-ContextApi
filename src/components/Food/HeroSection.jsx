import React from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FoodFirst from "./FoodFirst";
import FoodSecond from "./FoodSecond";
import FoodThird from "./FoodThird";

const PrevArrow = ({ onClick }) => (
  <div className="custom-arrow custom-prev" onClick={onClick}>
    <FaArrowLeft />
  </div>
);

const NextArrow = ({ onClick }) => (
  <div className="custom-arrow custom-next" onClick={onClick}>
    <FaArrowRight />
  </div>
);

const HeroSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 3500,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    appendDots: (dots) => (
      <div style={{ bottom: "-30px" }}>
        <ul className="custom-dots"> {dots} </ul>
      </div>
    ),
  };

  return (
    <div className="food-slider">
      <Slider {...settings}>
        <FoodFirst />
        <FoodSecond />
        <FoodThird />
      </Slider>
    </div>
  );
};

export default HeroSection;
