import React, { useState } from "react";
import { HeaderComponent } from "../components/HeaderComponent";
import { AddStickyWall, StickyWall } from "../components/StickyWall";
import { Input } from "./TodayPage";
import { addStickyRoute } from "../routes/todoRoutes";
function AddMore({ setInput1, setInput2, addSticky }) {
  return (
    <div className="my-auto space-y-3">
      <Input setInput={setInput1} placeholder={"Task"} />
      <Input setInput={setInput2} placeholder={"SubTask"} />
      <button
        onClick={addSticky}
        className="w-full py-[7px] font-Deca font-semibold bg-lightGreen-0 rounded-lg"
      >
        Add
      </button>
    </div>
  );
}
export const StickyWallPage = () => {
  const [addMore, setAddMore] = useState(false);
  const [addTask, setAddTask] = useState("");
  const [addSubTasks, setAddSubTask] = useState([""]);
  const [addData, setAddData] = useState([
    {
      task: "Complete Project Report",
      subTask: [
        "Gather data from all departments",
        "Write introduction and objectives",
        "Analyze data and draw conclusions",
        "Design charts and visual aids",
        "Write conclusion and recommendations",
      ],
    },
    {
      task: "Plan Marketing Strategy",
      subTask: [
        "Conduct market research",
        "Identify target audience",
        "Develop promotional campaigns",
        "Allocate budget for ads",
        "Set performance metrics",
      ],
    },
    {
      task: "Organize Annual Meeting",
      subTask: [
        "Book a conference room",
        "Send invitations to attendees",
        "Prepare presentation materials",
        "Arrange catering services",
        "Draft meeting agenda",
      ],
    },
    {
      task: "Develop New Website Feature",
      subTask: [
        "Define feature requirements",
        "Create wireframes and mockups",
        "Write frontend and backend code",
        "Perform QA testing",
        "Deploy to production",
      ],
    },
    {
      task: "Employee Training Program",
      subTask: [
        "Identify skill gaps",
        "Select training materials",
        "Schedule training sessions",
        "Invite external trainers",
        "Collect feedback from employees",
      ],
    },
  ]);

  const addStickyWall = async () => {
    console.log(addTask, addSubTasks);
    const response = await addStickyRoute(addTask, addSubTasks);
    const data = await response.json();
    console.log("API Response:", data); // Debugging step

    if (data.statusCode === 200) {
      console.log("SubTask from API:", data.data.subTasks);
      if (Array.isArray(data.subTask)) {
        setAddData((prevData) => [
          ...prevData,
          { task: addTask, subTask: data.data.subTasks },
        ]);
      } else {
        setAddData((prevData) => [
          ...prevData,
          { task: addTask, subTask: [data.data.subTasks] },
        ]);
      }
      console.log("Updated AddData:", addData);
    }
  };

  const openAddMore = () => {
    setAddMore(!addMore);
  };
  return (
    <section className="w-full">
      <div>
        <HeaderComponent children={"Sticky Wall"} />
        <div className=" rounded-lg border-[2px] px-[3px] py-[2px]">
          <div className="grid grid-cols-4 mx-3 my-[12px] ">
            {addData.map((value) => {
              return (
                <StickyWall
                  key={value.task + value.subTask}
                  color={"red"}
                  task={value.task}
                  subTask={value.subTask}
                />
              );
            })}

            <AddStickyWall openAddMore={openAddMore} />
            {addMore && (
              <AddMore
                addSticky={addStickyWall}
                setInput1={setAddTask}
                setInput2={setAddSubTask}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
