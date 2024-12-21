import React, { useEffect, useState } from "react";
import { HeaderComponent } from "./HeaderComponent";
import { Input } from "../pages/TodayPage";
import { SignOut } from "./SignOut";
import { UpcomingPage } from "../pages/UpcomingPage";
export function Task({ svg, text, setShow }) {
  return (
    <div
      onClick={() => {
        setShow(text);
      }}
      className=" hover:bg-[#EBEBEB] py-[1px] cursor-pointer
    rounded-lg px-[12px]  ml-[12px] flex items-center gap-2"
    >
      <img className=" w-[20px]" src={svg} />
      <p className=" text-gray-500 font-Deca">{text}</p>
    </div>
  );
}

export function Tasks({ openPanelFunc }) {
  return (
    <section className=" mt-[38px] space-y-2">
      <span className="text-gray-500 font-Deca font-semibold">TASKS</span>
      <Task
        setShow={openPanelFunc}
        text={"Upcoming"}
        svg={"/icons/angle-double-right-svgrepo-com.svg"}
      />
      <Task
        setShow={openPanelFunc}
        text={"Today"}
        svg={"/icons/menu-symbol-of-three-parallel-lines-svgrepo-com.svg"}
      />{" "}
      <Task
        setShow={openPanelFunc}
        text={"Calendar"}
        svg={"/icons/calendar.svg"}
      />{" "}
      <Task
        setShow={openPanelFunc}
        text={"Sticky Wall"}
        svg={"/icons/sticky-note-svgrepo-com.svg"}
      />
    </section>
  );
}
export function List({ color, text }) {
  return (
    <div
      className=" hover:bg-[#EBEBEB] py-[1px] pointer-cursor 
    rounded-lg   ml-[12px] flex items-center gap-[18px]"
    >
      <div className="w-3 ">
        <div className={` bg-${color}-400 p-3 rounded-md`}></div>
      </div>
      <p className=" text-gray-500 font-Deca">{text}</p>
    </div>
  );
}
export function Lists() {
  const [openAddmorePanel, setOpenAddmorePanel] = useState(false);
  const [color, setColor] = useState("");
  const [text, setText] = useState("");
  const [listItem, setlistItem] = useState([
    { text: "Work", color: "orange" },
    { text: "Personal", color: "red" },
    { text: "List 1", color: "blue" },
    { text: "Sticky Wall", color: "yellow" },
  ]);

  const openAddMore = () => {
    setOpenAddmorePanel(!openAddmorePanel);
  };

  const addList = () => {
    setlistItem([...listItem, { text, color }]);
    setText("");
    setColor("");
  };
  const listItems = [];
  return (
    <section className=" mt-[38px] space-y-2">
      <span className="text-gray-500 font-Deca font-semibold">TASKS</span>
      <div>
        {listItem.map((item, index) => (
          <List key={index} text={item.text} color={item.color} />
        ))}
      </div>
      <div className=" flex items-center gap-2 px-[12px] w-full">
        <img
          onClick={openAddMore}
          className=" cursor-pointer w-[18px]"
          src="/icons/plus-large-thick-svgrepo-com.svg"
        ></img>
        <span className="">Add more list</span>
      </div>
      {openAddmorePanel && (
        <AddList setColor={setColor} setText={setText} addList={addList} />
      )}
    </section>
  );
}

function AddList({ setColor, setText, addList }) {
  return (
    <div className="w-full flex gap-2">
      <Input setInput={setText} placeholder={"Name"} />
      <Input setInput={setColor} placeholder={"Color"} />
      <button onClick={addList}>add</button>
    </div>
  );
}

export const MenuBar = ({ panelStates, openPanelFunc }) => {
  return (
    <section
      className="  bg-[#F4F4F4] h-full
    rounded-lg px-[18px] py-[4px]
     my-[16px] w-full"
    >
      <div className="relative  h-full ">
        <div className="px-[3px] py-[2px]">
          <div className="mb-[28px]">
            <HeaderComponent classAttribute={"text-[24px]"} children={"Menu"} />
          </div>
          <Input placeholder={"Search"} />
          <Tasks panelStates={panelStates} openPanelFunc={openPanelFunc} />
          <Lists />
        </div>
        <div className="  absolute bottom-0">
          <SignOut />
        </div>
      </div>
    </section>
  );
};
