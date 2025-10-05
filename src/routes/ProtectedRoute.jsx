import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";

const ProtectedRoute = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const token = localStorage.getItem("accessToken");

  return isLoggedIn && token ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;
