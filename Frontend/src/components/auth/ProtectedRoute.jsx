import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    // Agar token nahi hai, toh login page par bhej do
    return <Navigate to="/login" replace />;
  }

  // Agar token hai, toh page dikhao
  return children;
};

export default ProtectedRoute;
