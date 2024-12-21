import React from "react";
import { HeaderComponent } from "../components/HeaderComponent";
import { StickyWall } from "../components/StickyWall";
const exampleData = {
  task: "Complete Project Report",
  subTask: [
    "Gather data from all departments",
    "Write introduction and objectives",
    "Analyze data and draw conclusions",
    "Design charts and visual aids",
    "Write conclusion and recommendations",
  ],
};
export const StickyWallPage = () => {
  return (
    <section className="w-full">
      <div>
        <HeaderComponent children={"Sticky Wall"} />
        <div className=" rounded-lg border-[2px] px-[3px] py-[2px]">
          <div className="grid grid-cols-4 mx-3 my-[12px] ">
            <StickyWall
              color={"blue"}
              task={exampleData.task}
              subTask={exampleData.subTask}
            />
            <StickyWall
              color={"orange"}
              task={exampleData.task}
              subTask={exampleData.subTask}
            />
            <StickyWall
              color={"red"}
              task={exampleData.task}
              subTask={exampleData.subTask}
            />
            <StickyWall
              color={"yellow"}
              task={exampleData.task}
              subTask={exampleData.subTask}
            />{" "}
            <StickyWall
              color={"red"}
              task={exampleData.task}
              subTask={exampleData.subTask}
            />{" "}
            <StickyWall
              color={"gray"}
              task={exampleData.task}
              subTask={exampleData.subTask}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
