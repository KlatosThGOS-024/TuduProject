import React from "react";
import { HeaderComponent } from "../components/HeaderComponent";
export function Input({ placeholder, setInput }) {
  return (
    <div className=" rounded-lg border-2 flex items-center gap-2 px-[12px] bg-white w-full">
      <img
        className="w-[18px]"
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
const data = [
  "Research content idea",
  "Research content idea",
  "Research content idea",
];
function Todo({ todo }) {
  return (
    <>
      <div className=" my-[12px] flex items-center gap-2 text-gray-800">
        <input type="checkbox"></input>
        <p>{todo}</p>
      </div>
      <hr></hr>
    </>
  );
}
function Todos({ status }) {
  return (
    <div className=" border-[1px] rounded-lg px-[18px] py-[12px]">
      <div>
        <HeaderComponent classAttribute={"text-[24px]"} children={status} />
      </div>
      <div>
        <Input placeholder={"Add New Task"}></Input>
      </div>
      <div className="my-[18px]">
        <Todo todo={data[0]} /> <Todo todo={data[0]} /> <Todo todo={data[0]} />
        <Todo todo={data[0]} />
        <Todo todo={data[0]} />
      </div>
    </div>
  );
}
export const TodayPage = () => {
  return (
    <section className="w-full">
      <HeaderComponent children={"Today"} />
      <div className=" w-2/3 ">
        <Todos />
      </div>
    </section>
  );
};
