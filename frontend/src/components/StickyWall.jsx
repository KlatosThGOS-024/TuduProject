import React from "react";
import { HeaderComponent } from "./HeaderComponent";

export const StickyWall = ({ color, task, subTask }) => {
  const bgColorClass = `bg-${color}-300`;

  return (
    <section
      className={`my-[12px] ml-[1px] ${bgColorClass} w-[328px] h-[296px] rounded-lg px-[12px] py-[14px] shadow-2xl`}
    >
      <HeaderComponent children={task} classAttribute={"text-[17px]"} />
      <div className="w-fit">
        {subTask.map((value) => {
          return (
            <div className=" flex items-center gap-3" key={value}>
              <span>-</span>
              <p className=" text-[13px]">{value}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
