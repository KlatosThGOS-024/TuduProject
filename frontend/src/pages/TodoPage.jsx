// import React from "react";
// import { Todo } from "../components/Todo"; // Check this path closely

// export const TodoPage = () => {
//   return (
//     <div>
//       <Todo />
//     </div>
//   );
// };

import { useState } from "react";
import { MenuBar } from "../components/MenuBar";
import { UpcomingPage } from "./UpcomingPage";
import { TodayPage } from "./TodayPage";
import { StickyWallPage } from "./StickyWallPage";
import { CalendarPage } from "./CalendarPage";

export const TodoPage = () => {
  const [openComponent, setOpenComponent] = useState("Upcoming");
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
    <section className=" w-full px-[28px] py-[18px]">
      <div className=" flex gap-3 justify-center">
        <div className="w-1/4 h-[90vh]">
          <MenuBar
            openComponent={openComponent}
            openPanelFunc={openPanelFunc}
          />
        </div>
        <div className="w-3/4 h-[90vh]">{renderComponent()}</div>
      </div>
    </section>
  );
};
