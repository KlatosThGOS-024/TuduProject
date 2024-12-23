import React, { useEffect, useState } from "react";
import { getCurrentUser } from "../routes/userRoutes";
import { ProfilePage } from "../pages/ProfilePage";
import { Link } from "react-router-dom";
export const Options = () => {
  const [showOptions, setShowOptions] = useState(true);
  const handleClick = () => {
    setShowOptions(!showOptions);
  };
  const [userPic, setUserrPic] = useState("");
  const profile = async () => {
    const response = await getCurrentUser();
    const data = await response.json();

    setUserrPic(data.data.avatar);
  };

  useEffect(() => {
    profile();
  }, []);
  return (
    <section>
      <div className="max-sm:hidden">
        <div className="flex gap-1 items-center relative ">
          <img
            onClick={handleClick}
            src={`${userPic}`}
            className="w-[80px] h-[80px] border-4 border-white rounded-full"
          />

          {showOptions && (
            <div>
              {showOptions && (
                <div>
                  <div className="hover:bg-gray-200 px-[3px] rounded-lg">
                    <Link to={"/to/profile"}>
                      <span>Profile</span>
                    </Link>
                  </div>
                  <div className="hover:bg-gray-200 px-[3px] rounded-lg">
                    <Link to={"/to/logout"}>
                      <span>SignOut</span>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
{
  /**/
}
