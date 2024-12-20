import React from "react";

export const HeaderComponent = ({ classAttribute, children }) => {
  return (
    <section className=" w-full">
      <div
        className={`text-black font-Deca ${
          classAttribute ? classAttribute : "text-[38px]"
        } font-semibold`}
      >
        {children}
      </div>
    </section>
  );
};
