import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet, useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation();

  const hideFooter = location.pathname === "/signIn" || location.pathname === "/login";

  return (
    <>
      <Header />
      <Outlet /> 
      {!hideFooter && <Footer />}
    </>
  );
};

export default Layout;
