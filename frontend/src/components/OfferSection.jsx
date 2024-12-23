export const OfferSection = () => {
  return (
    <section className=" w-[1200px] mx-auto px-[96px] ">
      {/* download offer */}
      <div className="  px-[96px] py-[24px] flex justify-between w-full ">
        <a href="#" className=" px-[24px]  ">
          <img
            className=" shadow-lg"
            src="/images\App-Store-button.png"
            alt=""
          />
        </a>
        <a href="# " className=" px-[24px] ">
          <img
            className=" shadow-lg"
            src="/images\Google-Play-button.png"
            alt=""
          />
        </a>
      </div>
      {/* offer */}
      {/* offer 1 */}
      <div className="  flex flex-row py-[75px]  gap-[48px] ">
        {/* text offer */}
        <div className=" w-[567px] space-y-4  text-center  ">
          <h2 className="  font-custom  font-[500] text-[#325bff] text-[30px] ">
            MANAGE ALL YOUR WORK IN ONE PLACE
          </h2>
          <p className=" text-gray-800 text-[18px]">
            Traditional project management systems focus only on project work
            and fail to recognise the other in-house and personal tasks that
            impact on your daily productivity.
          </p>
          <p className=" text-gray-800 text-[18px]">
            todo.vu is the right tool for you whether you’re a consultant,
            contractor or freelancer, or small agency needing to track work
            across multiple in-house and client-related projects.
          </p>
        </div>

        {/* image */}
        <img
          className=" w-[567px] h-[280px] shadow-lg rounded-lg"
          src="/images\video-thumbnail.png "
          alt=" video-thumnail"
        />
      </div>
      {/* offer 2 */}
      <div className="  flex flex-row py-[75px]  gap-[48px] ">
        {/* image */}
        <img
          className=" w-[567px] h-[280px] shadow-lg rounded-lg"
          src="/images\integrated.png "
          alt=" video-thumnail"
        />
        {/* text offer */}
        <div className=" w-[567px] space-y-4  text-center  ">
          <h2 className="  font-custom  font-[500] text-[#325bff] text-[30px] ">
            ALL-IN-ONE SOLUTION FOR TIME BILLING
          </h2>
          <p className=" text-gray-800 text-[18px]">
            No more double entry. No more headaches trying to link separate
            systems that just don’t quite work right.
          </p>
          <p className=" text-gray-800 text-[18px]">
            todo.vu brings all your customer management and project management
            into one place, with beautiful built-in{" "}
            <span className=" text-lightBlue-0">
              time tracking and billing.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};
