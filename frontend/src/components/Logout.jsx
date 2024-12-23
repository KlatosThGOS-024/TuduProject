import { useEffect, useState } from "react";
import { logOutUser } from "../routes/userRoutes";
import { useNavigate } from "react-router-dom";

export const Logout = () => {
  const navigate = useNavigate("");

  useEffect(() => {
    const logOut = async () => {
      const response = await logOutUser();
      const data = await response.json();

      if (data.statusCode != 200) {
        alert("User not found or password is incorrect");
        navigate("/to/todo");
        return;
      } else if (data.statusCode == 200) {
        navigate("/");
      }
    };
    logOut();
  });

  return null;
};
