// src/components/PrivateRoute.jsx
import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";

import Loader from "./Loader";
import { AuthContext } from "../providers/AuthContext";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  
  if (loading) {
    return <Loader />;
  }

  
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  
  return children;
};

export default PrivateRoute;
