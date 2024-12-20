import { useState } from "react";
import { MenuBar } from "../components/MenuBar";
import { UpcomingPage } from "./UpcomingPage";
import { TodayPage } from "./TodayTodoPage";

export const TodoPagee = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const openPanelFunc = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <section className=" w-full px-[28px] py-[18px]">
      <div className="">
        {/* <MenuBar openMenu={openPanelFunc} /> */}
        <TodayPage />
      </div>
    </section>
  );
};
