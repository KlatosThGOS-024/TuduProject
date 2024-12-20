import React from "react";
import { Link } from "react-router-dom";

export const SignLogin = () => {
  return (
    <section className="   bg-black opacity-80 w-full fixed top-0 z-50">
      <div className=" text-white  justify-end flex gap-3 mx-auto w-[1200px]  ">
        <Link to={"/sign-up"}> SignUp</Link>
        <Link to={"/login"}> Login</Link>
      </div>
    </section>
  );
};
