export const HeroSection = () => {
  return (
    <>
      <section
        className="mt-[96px]  h-[880px]
   bg-[#7550e9] w-full  mx-auto overflow-hidden  "
      >
        <div className="p-[54px] relative text-center  mx-auto w-[1200px]">
          {/* text */}
          <div classNam="">
            <h2 className=" font-custom text-[48px] text-white leading-[48x]">
              See what you can achieve!
            </h2>
            <p className=" font-custom text-[24px] leading-[24x]  text-white">
              Task management, time tracking and billing for freelancers,
              consultants and teams.
            </p>
            <div className=" mt-[64px]   ">
              <button
                className=" group transition-all duration-300
               bg-[#e95645] hover:opacity-[0.9]
              text-white px-7 border-[2px]  py-3 font-[500] relative leading-[34px]
               font-custom rounded-md  "
              >
                <span className="relative transition-all duration-300 ease-in-out group-hover:right-[14px] ">
                  GET STARTED FOR FREE
                </span>
              </button>
            </div>
          </div>
          <div className=" overflow-hidden  mt-[84px] relative max-w-[100%]  h-[521px] w-[ 1200px]">
            <img
              src="public\images\app_block_sidebar.png "
              className="w-full h-full object-contain "
              alt=" img"
            ></img>
          </div>
        </div>
      </section>
      <div className=" relative -top-[148px]  rotate-180 -scale-y-100 w-full  ">
        <img
          className="w-full overflow-hidden "
          src="public\images\download.svg"
        />
      </div>
    </>
  );
};
