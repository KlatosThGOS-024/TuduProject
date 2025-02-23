import { Outlet, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { logInCheck } from "../routes/userRoutes";

export const ProtectedRoute = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  console.log("Harkirat123@Harkirat123@Harkirat123@Harkirat123@1");

  useEffect(() => {
    const checkLogin = async () => {
      try {
        console.log("rum");
        const response = await logInCheck();
        setIsLoggedIn(response.success);
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
