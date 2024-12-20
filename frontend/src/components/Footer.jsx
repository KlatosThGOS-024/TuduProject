export const Footer = () => {
  return (
    <>
      <div className=" ">
        <img className="w-full" src="public\images\foot.svg"></img>
      </div>
      <section
        className=" w-full
      bg-[linear-gradient(180deg,#325bff_4%,rgba(0,0,0,0.82)_53%)] "
      >
        <div className=" w-[1200px] mx-auto p-[60px]">
          <div className=" grid lg:grid-cols-5 md:grid-cols-2  ">
            <div className=" text-white space-y-4">
              <h2 className="font-custom uppercase">About</h2>
              <ul className="text-sm space-y-3">
                <li>Contact</li>
                <li>Newsletters</li> <li>Privacy</li> <li>Terms of Service</li>
                <li>Our new name</li> <li>Security</li>
              </ul>
            </div>
            <div className=" text-white font-custom space-y-4">
              <h2 className="font-custom uppercase">Businnesses</h2>
              <ul className="text-sm space-y-3">
                <li>Architects</li> <li>Consultants</li>{" "}
                <li>Software developers</li>
                <li>Virtual assistants</li>{" "}
                <li>Creative designers & agencies</li>
                <li>Help Desk Software</li>
                <li>ISO Compliance tracking</li>
                <li>Time tracking and billing</li>
                <li>Managing a remote team</li>
                <li>Not for profit Recurring tasks</li>
              </ul>
            </div>
            <div className=" text-white  space-y-4">
              <h2 className="font-custom uppercase">Browse</h2>
              <ul className="space-y-3 text-sm">
                <li>Overview</li>
                <li>Testimonials</li> <li>Infrastructure statement</li>{" "}
                <li>API Connectors</li>
                <li>Virtual assistants</li> <li>Compare todo.vu with others</li>
                <li>Help Desk Software</li>
                <li>Product roadmap</li>
              </ul>
            </div>
            <div className="  md:text-start md:mt-8 space-y-4 text-white text-end  font-custom">
              <h2>KEEP IN TOUCH</h2>
              <p>Subscribe to our newsletter for regular updates</p>
              <div className=" mt-4   ">
                <button
                  className=" group transition-all duration-300
               bg-black hover:opacity-[0.9]
              text-white px-7  py-3 font-[500] relative leading-[34px]
               font-custom rounded-md  "
                >
                  <span className="relative transition-all duration-300 ease-in-out group-hover:right-[14px] ">
                    Subscribe
                  </span>
                </button>
              </div>

              <div className="flex flex-col space-y-3 ">
                {" "}
                <a href="#" className=" inline-block">
                  <img
                    className=" shadow-lg"
                    src="public\images\App-Store-button.png"
                    alt=""
                  />
                </a>
                <a href="# " className="inline-block ">
                  <img
                    className=" shadow-lg"
                    src="public\images\Google-Play-button.png"
                    alt=""
                  />
                </a>
              </div>
            </div>
            <div className="  text-white text-end font-custom ml-4 space-y-2">
              <h2>Contact</h2>
              <span>hello@todo.vu</span>
              <p>Level 1, 888 Brunswick Street New Farm QLD 4005 Australia</p>
              <span>123345455577</span>
              <h3>Follows</h3>
              <div className=" flex flex-row gap-2  justify-center">
                <a href="#">
                  <img className="w-[36px]" src="../../icons/twitter.png" />
                </a>{" "}
                <a href="#">
                  <img
                    className="w-[36px]"
                    src="../../icons/communication.png"
                  />
                </a>{" "}
                <a href="#">
                  <img className="w-[36px]" src="../../icons/instagram.png" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
