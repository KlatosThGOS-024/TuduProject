import React, { useEffect, useState } from "react";
import { getCurrentUser } from "../routes/userRoutes";

export const ProfilePage = () => {
  const [userPic, setUserrPic] = useState("");
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const profile = async () => {
    const response = await getCurrentUser();
    const data = await response.json();

    setUserrPic(data.data.avatar);
    setFullname(data.data.fullname);
    setEmail(data.data.email);
    setUsername(data.data.username);
  };

  useEffect(() => {
    profile();
  }, []);
  return (
    <section>
      <div className="flex my-[48px] justify-center w-[780px] mx-auto relative">
        <div className="h-full bg-gray-200 p-8">
          <div className="bg-white rounded-lg shadow-xl pb-8">
            <div className="absolute right-12 mt-4 rounded"></div>
            <div className="w-full h-[250px]">
              <img
                src="https://vojislavd.com/ta-template-demo/assets/img/profile-background.jpg"
                className="w-full h-full rounded-tl-lg rounded-tr-lg"
              ></img>
            </div>
            <div className="flex flex-col items-center -mt-20">
              <img
                src={`${userPic}`}
                className="w-40 h-40 border-4 border-white rounded-full"
              ></img>
              <div className="flex items-center space-x-2 mt-2">
                <p className="text-2xl">{username}</p>
                <span className="bg-blue-500 rounded-full p-1" title="Verified">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-gray-100 h-2.5 w-2.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      sstrokelinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="4"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </span>
              </div>
              <p className="text-gray-700">
                Senior Software Engineer at Tailwind CSS
              </p>
              <p className="text-sm text-gray-500">New York, USA</p>
            </div>
            <div className="flex-1 flex flex-col items-center lg:items-end justify-end px-8 mt-2"></div>
          </div>

          <div className="w-full  my-4 flex flex-col 2xl:flex-row space-y-4 2xl:space-y-0 2xl:space-x-4">
            <div className="w-full flex flex-col ">
              <div className="flex-1 bg-white rounded-lg shadow-xl p-8">
                <h4 className="text-xl text-gray-900 font-bold">
                  Personal Info
                </h4>
                <ul className="mt-2 text-gray-700">
                  <li className="flex border-b py-2">
                    <span className="font-bold w-24">Username:</span>
                    <span className="text-gray-700">{username}</span>
                  </li>
                  <li className="flex border-y py-2">
                    <span className="font-bold w-24">Full name:</span>
                    <span className="text-gray-700">{fullname}</span>
                  </li>
                  <li className="flex border-b py-2">
                    <span className="font-bold w-24">Birthday:</span>
                    <span className="text-gray-700">24 Jul, 1991</span>
                  </li>
                  <li className="flex border-b py-2">
                    <span className="font-bold w-24">Joined:</span>
                    <span className="text-gray-700">
                      10 Jan 2022 (25 days ago)
                    </span>
                  </li>

                  <li className="flex border-b py-2">
                    <span className="font-bold w-24">Email:</span>
                    <span className="text-gray-700">{email}</span>
                  </li>
                </ul>
              </div>
            </div>{" "}
          </div>
        </div>
      </div>
    </section>
  );
};
