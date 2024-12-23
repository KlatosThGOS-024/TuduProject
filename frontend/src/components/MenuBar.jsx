import React, { useEffect, useState } from "react";
import { HeaderComponent } from "./HeaderComponent";
import { Link } from "react-router-dom";
import { UpcomingPage } from "../pages/UpcomingPage";
import { Options } from "./Options";
import { getCurrentUser } from "../routes/userRoutes";

export function Input({ placeholder, setInput }) {
  return (
    <div className=" rounded-lg border-2 flex items-center gap-2 px-[12px] bg-white w-full">
      <img
        className=" cursor-pointer w-[18px]"
        src="/icons/plus-large-thick-svgrepo-com.svg"
      ></img>
      <input
        onChange={(e) => {
          setInput(e.target.value);
        }}
        className=" outline-none px-[5px] w-full py-[8px] placeholder:text-gray-400"
        placeholder={placeholder}
      ></input>
    </div>
  );
}
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
        <div
          style={{ backgroundColor: color }}
          className={` bg-${color}-400 p-3 rounded-md`}
        ></div>
      </div>
      <p className=" text-gray-500 font-Deca">{text}</p>
    </div>
  );
}

export function Lists() {
  const getRandomIndex = (array) => {
    return Math.floor(Math.random() * array.length);
  };
  const colors = [
    "#fdba74",
    "#fde047",
    "#86efac",
    "#5eead4",
    "#93c5fd",
    "#a5b4fc",
    "#c4b5fd",
    "#f9a8d4",
    "#d1d5db",
    "#fda4af",
  ];

  const [openAddmorePanel, setOpenAddmorePanel] = useState(false);

  const [text, setText] = useState("");
  const [listItem, setlistItem] = useState([
    { text: "Work" },
    { text: "Personal" },
    { text: "List 1" },
    { text: "Sticky Wall" },
  ]);

  const openAddMore = () => {
    setOpenAddmorePanel(!openAddmorePanel);
  };

  const addList = () => {
    setlistItem([...listItem, { text }]);
    setText("");
  };

  return (
    <section className=" mt-[38px] space-y-2">
      <span className="text-gray-500 font-Deca font-semibold">TASKS</span>
      <div>
        {listItem.map((item, index) => (
          <List
            key={index}
            text={item.text}
            color={colors[getRandomIndex(colors)]}
          />
        ))}
      </div>
      <div className=" flex items-center gap-2 px-[12px] w-full">
        <img
          onClick={openAddMore}
          className=" cursor-pointer w-[18px]"
          src="/icons/plus-large-thick-svgrepo-com.svg"
        ></img>
        <span>Add more list</span>
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
  const [showOptions, setShowOptions] = useState(true);
  const handleClick = () => {
    setShowOptions(!showOptions);
  };
  const [userPic, setUserrPic] = useState("");
  const profile = async () => {
    const response = await getCurrentUser();
    const data = await response.json();

    setUserrPic(data.data.avatar);
  };

  useEffect(() => {
    profile();
  }, []);
  return (
    <section
      className=" bg-[#F4F4F4] h-full max-sm:h-fit
    rounded-lg px-[18px] py-[4px] relative
     my-[16px] w-full"
    >
      <div className="absolute right-0 z-30">
        <div className="flex gap-1 items-center  ">
          <img
            onClick={handleClick}
            src={`${userPic}`}
            className="w-[60px] h-[60px] border-4 cursor-pointer border-white rounded-full"
          />

          {showOptions && (
            <div>
              {showOptions && (
                <div>
                  <div className="hover:bg-gray-200 px-[3px] rounded-lg">
                    <Link to={"/to/profile"}>
                      <span>Profile</span>
                    </Link>
                  </div>
                  <div className="hover:bg-gray-200 px-[3px] rounded-lg">
                    <Link to={"/to/logout"}>
                      <span>SignOut</span>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
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
          <Options />
        </div>
      </div>
    </section>
  );
};
