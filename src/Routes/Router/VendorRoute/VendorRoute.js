import React from "react";
import { useStore } from "react-redux";
import { Navigate } from "react-router-dom";

const VendorRoute = ({ children }) => {
  const store = useStore();
  const user = store.getState().states.user;
  const role = user?.role;

  if (user && role === "vendor") {
    return children;
  }

  return <Navigate to="/login"></Navigate>;
};

export default VendorRoute;
