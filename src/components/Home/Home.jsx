import React from "react";
import Header from "../header/Header";
import HeroSection from "../food/HeroSection";
import Features from "../features/Features";
import FreeRecipes from "../recipes/FreeRecipes";
import HealthyRecipes from "../healthy/HealthyRecipes";
import Post from "../posts/Post";
import Review from "../reviews/Review";
import ContactUs from "../contact/ContactUs";
import Footer from "../footer/Footer";
import Blog from "../blog/Blog";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Features />
      <Post />
      <Blog />
      <Review />
      <ContactUs />
    </>
  );
};

export default Home;
