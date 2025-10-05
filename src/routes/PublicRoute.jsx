import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";

const PublicRoute = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const token = localStorage.getItem("accessToken");

  return isLoggedIn && token ? <Navigate to="/" /> : <Outlet />;
};

export default PublicRoute;
