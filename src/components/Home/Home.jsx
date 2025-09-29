import React from 'react'
import Header from '../Header/Header'
import HeroSection from '../Food/HeroSection'
import Features from '../Features/Features'
import FreeRecipes from '../Recipes/FreeRecipes'
import HealthyRecipes from '../Healthy/HealthyRecipes'
import Post from '../Posts/Post'
import Review from '../Reviews/Review'
import ContactUs from '../Contact/ContactUs'
import Footer from '../Footer/Footer'
import Blog from '../blog/Blog'

const Home = () => {
  return (
    <>

      <HeroSection/>
      <Features />
      <Post/>
      <Blog/> 
      <Review/>
      <ContactUs/> 
 
      </>
  )
}

export default Home