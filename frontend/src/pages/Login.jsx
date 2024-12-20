import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logInUser } from "../routes/userRoutes";

const InputTaker = ({ placeholder, setInput }) => {
  return (
    <div className=" bg-orange-300 ">
      <input
        onChange={(e) => {
          setInput(e.target.value);
        }}
        placeholder={placeholder}
        className="w-full  md:placeholder:text-center lg:placeholder:text-start outline-none border-b-2 focus:border-b-lightBlue-0 focus:placeholder:top-0"
      />
    </div>
  );
};
export const Login = () => {
  const navigate = useNavigate("");
  const [user, setUserFailed] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const logIn = async (params) => {
    const data = await logInUser(params);
    console.log(data.success);
    if (data.status != 200) {
      alert("User not found or password is incorrect");
      return;
    } else {
      navigate("/to/todo");
    }
  };

  return (
    <section className=" w-full flex ">
      <div className="lg:max-w-[625px] flex flex-col  font-custom lg:min-w-[486px] py-[28px] px-[56px] w-full  ">
        <img src="public\images\logo.png" className=" w-[156px]"></img>
        <div className=" py-[12%]">
          <h2 className=" text-[32px]">
            Welcome back, sign in to your account
          </h2>
          <Link to={"/sign-up"}> or, Create an Account</Link>
          <div className=" my-4 mx-auto flex justify-center m-2">
            <p className=" bg-[#1976d2] w-fit flex gap-2 rounded-lg shadow-md px-[16px] py-[6px]">
              <img src="public\icons\search.png" className="w-6" alt="" />
              <span className=" text-white text-[14px]">Login WITH GOOGLE</span>
            </p>
          </div>
          <hr></hr>

          <div className=" my-6 space-y-[28px]">
            <p className=" text-gray-500 text-center">Sign up with email</p>
            {<InputTaker setInput={setUsername} placeholder="Username" />}

            {<InputTaker setInput={setPassword} placeholder=" Password" />}
          </div>
          <div className=" place-self-center bg-orange-300 m-2">
            <button
              onClick={() => {
                logIn({ username, password });
              }}
              className=" bg-[#1976d2] w-fit flex gap-2 rounded-md
               shadow-md px-[24px] py-[6px]"
            >
              <span className=" text-white text-[14px]">Login</span>
            </button>
          </div>
          {user && <p>User not found</p>}
        </div>
      </div>
      <div className=" w-[85%] hidden lg:grid place-items-center h-screen px-[96px] py-[58px] bg-blueSky-0">
        <img src="public\images\step_1.svg" alt="" />
      </div>
    </section>
  );
};
