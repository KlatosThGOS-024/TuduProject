import { useState, useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { logInCheck } from "../routes/userRoutes";
export const PublicRoute = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  useEffect(() => {
    const checkLogin = async () => {
      const response = await logInCheck();
      const data = await response.json();

      setIsLoggedIn(data.statusCode === 200); // Set true if logged in, false otherwise
    };
    checkLogin();
  }, []);

  if (isLoggedIn === null) return null;

  return isLoggedIn ? <Navigate to="/to/todo" /> : <Outlet />;
};
