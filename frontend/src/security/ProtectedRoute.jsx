import { useState } from "react";
import { logInCheck } from "../routes/userRoutes";
import { Outlet, Navigate } from "react-router-dom";

export const ProtectedRoute = () => {
  const [navHim, setNavHim] = useState(false);

  const checkLogin = async () => {
    const response = await logInCheck();
    const data = await response.json();

    if (data.statusCode !== 200) {
      setNavHim(true);
    }
  };
  checkLogin();

  return navHim ? <Navigate to="/login" /> : <Outlet />;
};
