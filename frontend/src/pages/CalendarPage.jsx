import React, { useState } from "react";
import { HeaderComponent } from "../components/HeaderComponent";
const today = new Date();
const day = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thrusday",
  "Friday",
  "Saturday",
];

const Today = () => {
  return (
    <div className="">
      <p>{day[today.getDay()]}</p>
      <div>Today todos</div>
    </div>
  );
};
function WeekDays({ text, day }) {
  return (
    <div className="  bg-[#EBEBEB] px-[8px] py-[12px] rounded-lg">
      <p className=" font-Deca text-[23px] font-semibold ">{day}</p>
      <div>{text}</div>
    </div>
  );
}
function Week() {
  return (
    <section>
      <div className="h-[90vh] grid grid-cols-8 gap-3">
        <div>faltu</div>
        <WeekDays day={"Monday"} text={"Nothing"} />
        <WeekDays day={"Tuesday"} text={"Nothing"} />
        <WeekDays day={"Wednesday"} text={"Nothing"} />
        <WeekDays day={"Thrusday"} text={"Nothing"} />
        <WeekDays day={"Friday"} text={"Nothing"} />
        <WeekDays day={"Saturday"} text={"Nothing"} />
        <WeekDays day={"Sunday"} text={"Nothing"} />
      </div>
    </section>
  );
}
function ChooseButton({ text, setTheComponentFuncParam }) {
  return (
    <div
      onClick={() => {
        setTheComponentFuncParam(text);
      }}
      className="bg-white hover:bg-[#EBEBEB] 
       active:bg-gray-400 cursor-pointer rounded-md py-[2px]  "
    >
      <span
        className=" px-[8px] text-[12px] 
       font-Deca"
      >
        {text}
      </span>
    </div>
  );
}
export const CalendarPage = () => {
  const [openDay, setOpenDay] = useState("Day");
  const setTheComponentFunc = (value) => {
    setOpenDay(value);
  };
  const setTheComponentToRender = (value) => {
    switch (value) {
      case "Day":
        return <Today />;
      case "Week":
        return <Week />;
    }
  };
  return (
    <section className="w-full h-full overflow-hidden">
      <HeaderComponent
        children={`${today.getDate()}-${day[today.getDay()]}-${today.getFullYear()}`}
      />
      <div
        className=" mb-[12px] flex w-fit rounded-lg bg-[#EBEBEB] space-x-2
       px-[8px] py-[7px]"
      >
        <ChooseButton
          setTheComponentFuncParam={setTheComponentFunc}
          text={"Day"}
        />
        <ChooseButton
          setTheComponentFuncParam={setTheComponentFunc}
          text={"Week"}
        />
        <ChooseButton
          setTheComponentFuncParam={setTheComponentFunc}
          text={"Month"}
        />
      </div>
      <div>{setTheComponentToRender(openDay)}</div>
    </section>
  );
};
