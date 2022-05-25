import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function AdminRoute({ children }) {
  const user = useSelector((state) => state.authReducer.user);
  return <>{user.role === 1 ? children : <Navigate to='/gallery' />}</>;
}

export default AdminRoute;
