import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { Outlet, useLocation } from "react-router-dom";
import ScrollToTop from "../../scrollTop/ScrollToTop";
import { ToastContainer } from "react-toastify";

const Layout = () => {
  const location = useLocation();

  const hideFooter =
    location.pathname === "/signIn" || location.pathname === "/signUp";

  return (
    <>
      <ScrollToTop />
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Header />
      <Outlet />
      {!hideFooter && <Footer />}
    </>
  );
};

export default Layout;
