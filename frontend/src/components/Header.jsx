import { useEffect, useState } from "react";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`w-full fixed top-0 z-30 bg-white transition-all
         duration-300 ${isScrolled ? "shadow-md py-[1px]" : "py-3"}`}
    >
      {" "}
      <div className="  mx-auto w-[1119px] grid grid-cols-2 items-center  mt-[18px] ">
        {/* logo */}
        <div className=" my-3 ">
          <img
            className={`   bg-white transition-all duration-300 ${
              isScrolled ? "shadow-md w-[154px]" : "w-[208px]"
            }`}
            src=" ../../images/logo.png"
            alt=""
          />
        </div>
        {/* Navigation */}
        <div className=" inline-block ">
          <ul className=" flex space-x-6 font-custom  ">
            <li
              className="  font-semibold text-[18px] leading-[14px] 
      transition duration-900 hover:opacity-60 uppercase text-[rgb(50,91,255)]"
            >
              benefits
            </li>
            <li
              className=" font-semibold text-[18px] leading-[14px] 
      transition duration-900 hover:opacity-60 uppercase text-[#325bff]"
            >
              features
            </li>
            <li
              className=" font-semibold text-[18px] leading-[14px] 
      transition duration-900 hover:opacity-60 uppercase text-[#325bff]"
            >
              pricing
            </li>
            <li
              className=" font-semibold text-[18px] leading-[14px] 
      transition duration-900 hover:opacity-60 uppercase text-[#325bff]"
            >
              blog
            </li>
            <li
              className=" font-semibold text-[18px] leading-[14px] 
      transition duration-900 hover:opacity-60 uppercase text-[#325bff]"
            >
              support
            </li>
            <li
              className=" font-semibold text-[18px] leading-[14px] 
      transition duration-900 hover:opacity-60 uppercase text-[#325bff]"
            >
              contact
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
