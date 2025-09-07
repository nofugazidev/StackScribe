import React from "react";
import { useAuth } from "../../context/AuthContext";
import { Navigate } from "react-router-dom";

const ProtectedRoute: React.FC<{children: React.ReactNode}> = ({children}) => {
  const auth = useAuth();
  const user = auth?.user;
  return user ? children : <Navigate to='/login' />
};

export default ProtectedRoute;
