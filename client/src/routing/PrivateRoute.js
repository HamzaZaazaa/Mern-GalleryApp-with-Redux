import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Loader from "../Attachments/Loading/Loader";

function PrivateRoute({ children }) {
  // Auth initial state from authReducer
  const auth = useSelector((state) => state.authReducer.auth);
  // Loading initial state from authReducer
  const loading = useSelector((state) => state.authReducer.loading);
  // token from local storage
  const token = localStorage.getItem("token");
  return (
    <>
      {loading ? (
        <Loader />
      ) : auth && token ? (
        children
      ) : (
        <Navigate to='/login' />
      )}
    </>
  );
}

export default PrivateRoute;
