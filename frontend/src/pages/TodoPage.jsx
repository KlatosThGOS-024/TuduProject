import { StickyWallPage } from "./StickyWallPage";
import { CalendarPage } from "./CalendarPage";
import { useState } from "react";
import { TodayPage } from "./TodayPage";
import { UpcomingPage } from "./UpcomingPage";
import { MenuBar } from "../components/MenuBar";

export const TodoPage = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleClick = () => {
    setShowMenu(!showMenu);
  };
  const [openComponent, setOpenComponent] = useState("Today");
  const openPanelFunc = (panel) => {
    setOpenComponent(panel);
  };
  const renderComponent = () => {
    switch (openComponent) {
      case "Upcoming":
        return <UpcomingPage />;
      case "Sticky Wall":
        return <StickyWallPage />;
      case "Today":
        return <TodayPage />;
      case "Calendar":
        return <CalendarPage />;
    }
  };

  return (
    <section className="w-full px-[28px] py-[18px] ">
      <div className="  flex gap-3 justify-center">
        <div
          className="w-1/4 max-sm:absolute max-sm:z-20 
        max-sm:w-full max-sm:h-[95vh] h-[90vh]"
        >
          {showMenu && (
            <MenuBar
              openComponent={openComponent}
              openPanelFunc={openPanelFunc}
            />
          )}
        </div>
        <div className="relative">
          <div className="  max-sm:block hidden  absolute left-0">
            <img
              className=" cursor-pointer w-[28px]"
              onClick={handleClick}
              src="/images/menu.png"
            />
          </div>
        </div>
        <div className=" w-3/4 max-sm:w-full h-[90vh]">{renderComponent()}</div>
      </div>
    </section>
  );
};
