import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './App.css';
import './font/css/all.min.css'
import React from 'react';
import Home from "./components/Home/Home";
import Features from "./components/Features/Features";
import { Route, Routes } from "react-router";
import Post from "./components/Posts/Post";
import ContactUsPage from "./components/ContactPage/ContactUsPage";
import Layout from "./components/layout/Layout";
import SinglePost from "./components/Posts/SinglePost";
import SingleBlog from "./components/blog/SingleBlog";
import ScrollToTop from "./components/ScrollToTop";
import CourseDetails from "./coursedetails/CourseDetails";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/signUp";



function App() {
  return (
     <>
       <ScrollToTop />
   <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Features />} />
         <Route path = "/individualCourseDeatils/:courseId" element = {<CourseDetails/>}/>
        <Route path="/contactUs" element={<ContactUsPage />} />
        <Route path="/posts" element={<Post />} />
        <Route path = "/readMoreAboutPost/:postId" element = {<SinglePost/>}/>
        <Route path = "/readMoreAboutBlog/:blogId" element = {<SingleBlog/>}/>
        <Route path = "/signIn" element = {<SignIn/>}/>
        <Route path = "/signUp" element = {<SignUp/>}/>
      </Route>
    </Routes>
     </>

  );
}

export default App;
