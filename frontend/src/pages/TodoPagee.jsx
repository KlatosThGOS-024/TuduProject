import { useState } from "react";
import { MenuBar } from "../components/MenuBar";
import { UpcomingPage } from "./UpcomingPage";
import { TodayPage } from "./TodayTodoPage";
import { StickyWallPage } from "./StickyWallPage";

export const TodoPagee = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [showUpcoming, setShowUpcoming] = useState(false);
  const [showStickyWall, setShowStickyWall] = useState(false);
  const panelStates = {
    showUpcoming,
    setShowUpcoming,
    showStickyWall,
    setShowStickyWall,
  };
  const openPanelFunc = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <section className=" w-full px-[28px] py-[18px]">
      <div className=" flex gap-3 justify-center">
        <div className="w-1/4">
          <MenuBar panelStates={panelStates} openMenu={openPanelFunc} />
        </div>
        <div className=" w-3/4">
          <StickyWallPage />
        </div>
      </div>
    </section>
  );
};
