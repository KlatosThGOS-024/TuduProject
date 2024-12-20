import React from "react";
import { Link } from "react-router-dom";
import { logOutUser } from "../routes/userRoutes";

export const Logout = () => {
  const logOut = async () => {
    const response = await logOutUser();
    const data = response.json();
    console.loh(data);
    if (data.statusCode != 200) {
      alert("User not found or password is incorrect");
      return;
    }
    if (data.success) {
      navigate("/to/todo");
    }
  };
  return (
    <div className=" place-self-center bg-orange-300 m-2">
      <button
        onClick={() => {
          logOut();
        }}
        className=" bg-[#1976d2] w-fit flex gap-2 rounded-md
       shadow-md px-[24px] py-[6px]"
      >
        <span className=" text-white text-[14px]">
          <Link to={"/"}>Logout</Link>
        </span>
      </button>
    </div>
  );
};
