import React from "react";
import { HeaderComponent } from "./HeaderComponent";

export const AddStickyWall = ({ openAddMore }) => {
  return (
    <section
      onClick={openAddMore}
      className={` cursor-pointer bg-gray-300 w-[328px] h-[296px] rounded-lg py-[82px] px-[87px]  my-[12px] ml-[1px] shadow-2xl`}
    >
      <img
        className="w-[116px]"
        src="/icons/plus-large-thick-svgrepo-com.svg"
      />
    </section>
  );
};

export const StickyWall = ({ id, color, task, subTask, deleteStickyRoute }) => {
  const bgColorClass = `bg-${color}-300`;

  return (
    <section
      className={`relative my-[12px] ml-[1px] ${bgColorClass} w-[328px] h-[296px] rounded-lg px-[12px] py-[14px] shadow-2xl`}
    >
      <img
        onClick={() => {
          deleteStickyRoute(id);
        }}
        className="cursor-pointer w-[28px] absolute right-2 top-3"
        src="/icons/icons8-cross-48.png"
      />
      <HeaderComponent children={task} classAttribute={"text-[17px]"} />
      <div className="w-fit">
        {subTask.map((value) => {
          const key = Math.random();
          return (
            <div className=" flex items-center gap-3" key={key}>
              <span>-</span>
              <p className=" text-[13px]">{value}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
