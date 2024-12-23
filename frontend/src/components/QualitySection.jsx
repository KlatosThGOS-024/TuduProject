export const QualitySection = () => {
  return (
    <>
      <section className="  px-[112px] py-[24px] bg-lightGreen-0 w-full ">
        <div className="mx-auto w-[1200px] space-y-12">
          {/* Sub-Header Texts */}
          <div className=" text-center p-3 space-y-5">
            <h2 className="font-Fredoka text-lightBlue-0 font-[500] text-3xl ">
              FOCUS ON GETTING THINGS DONE
            </h2>
            <div>
              <p className=" text-[18px] font-Fredoka font-[400] text-gray-800 ">
                The simple, intuitive user interface is designed to help you see
                exactly what you need to focus on.
              </p>
              <p className="text-[18px] font-Fredokafont-[400] text-gray-800">
                As a team member, you can focus on your work – and as a team
                leader, you can easily manage your team, even when they’re
                <br />
                <span className=" text-[18px] font-Fredoka text-lightBlue-0 ">
                  {" "}
                  working remotely.
                </span>
              </p>
            </div>
          </div>
          {/* Qualities */}
          <div className="  px-[8px] py-[30px] grid grid-cols-3 mt-[1000px]">
            <div className=" text-center space-y-4 ">
              <img
                src="/images\benefit3_efficiency.png"
                className=" inline-block"
              />
              <h3 className="font-Fredoka">IMPROVE EFFICIENCY</h3>
              <p className="font-Fredoka">
                More focused communication, real-time updates, never miss or
                forget a task.
              </p>
            </div>
            <div className=" text-center space-y-4">
              <img
                className="inline-block"
                src="/images\benefit3_quality.png"
              />
              <h3 className="font-Fredoka">IMPROVE QUALITY</h3>
              <p className="font-Fredoka">
                Clearer communication and organisation leads to fewer mistakes.
              </p>
            </div>
            <div className="  text-center space-y-4">
              <img
                className=" inline-block"
                src="/images\benefit3_accountability.png"
              />
              <h3 className="font-Fredoka">IMPROVE ACCOUNTABILITY</h3>
              <p className="font-Fredoka">
                Through detailed record keeping and reporting.
              </p>
            </div>
          </div>
          <div className="  text-center">
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
      </section>
    </>
  );
};
