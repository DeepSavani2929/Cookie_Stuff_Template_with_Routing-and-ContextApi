import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import "./font/css/all.min.css";
import React from "react";
import Home from "./components/home/Home";
import Features from "./components/features/Features";
import { Route, Routes } from "react-router";
import Post from "./components/posts/Post";
import ContactUsPage from "./components/contactPage/ContactUsPage";
import Layout from "./components/layout/Layout";
import SinglePost from "./components/posts/SinglePost";
import SingleBlog from "./components/blog/SingleBlog";

import CourseDetails from "./coursedetails/CourseDetails";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import "react-toastify/dist/ReactToastify.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import PublicRoute from "./routes/PublicRoute";
import ProtectedRoute from "./routes/PublicRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/courses", element: <Features /> },
      { path: "/contactUs", element: <ContactUsPage /> },
      { path: "/posts", element: <Post /> },
      {
        element: <ProtectedRoute />,
        children: [
          { path: "/readMoreAboutPost/:postId", element: <SinglePost /> },
          { path: "/readMoreAboutBlog/:blogId", element: <SingleBlog /> },
          {
            path: "/individualCourseDeatils/:courseId",
            element: <CourseDetails />,
          },
        ],
      },

      {
        element: <PublicRoute />,
        children: [
          {
            path: "/signIn",
            element: <SignIn />,
          },

          {
            path: "/signUp",
            element: <SignUp />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
