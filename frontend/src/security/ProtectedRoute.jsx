import { Outlet, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { logInCheck } from "../routes/userRoutes";

export const ProtectedRoute = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  useEffect(() => {
    const checkLogin = async () => {
      try {
        const response = await logInCheck();
        const data = await response.json();
        setIsLoggedIn(data.success);
      } catch (error) {
        setIsLoggedIn(false);
      }
    };

    checkLogin();
  }, []);

  if (isLoggedIn === null) {
    return <div>Loading...</div>;
  }

  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};
