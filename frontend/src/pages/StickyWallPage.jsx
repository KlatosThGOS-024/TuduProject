import React, { useEffect, useState } from "react";
import { HeaderComponent } from "../components/HeaderComponent";
import { AddStickyWall, StickyWall } from "../components/StickyWall";
// import { Input } from "./TodayPage";
import {
  addStickyRoute,
  deleteStickyRoute,
  getStickyRoute,
} from "../routes/todoRoutes";
import { Input } from "../components/MenuBar";
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
const getRandomIndex = (array) => {
  return Math.floor(Math.random() * array.length);
};
export const StickyWallPage = () => {
  const colors = [
    "#fb923c",
    "#facc15",
    "#4ade80",
    "#2dd4bf",
    "#60a5fa",
    "#818cf8",
    "#a78bfa",
    "#f472b6",
    "#9ca3af",
    "#fb7185",
  ];

  const [addMore, setAddMore] = useState(false);
  const [addTask, setAddTask] = useState("");
  const [addSubTasks, setAddSubTask] = useState([""]);
  const [addData, setAddData] = useState([""]);
  const [loading, setLoading] = useState(true);
  const addStickyWall = async () => {
    const response = await addStickyRoute(addTask, addSubTasks);
    const data = await response.json();

    if (data.statusCode === 200) {
      setAddData((prevData) => [
        ...prevData,
        {
          task: data.data.task,
          subTasks: data.data.subTasks,
          id: data.data._id,
          color: colors[getRandomIndex(colors)],
        },
      ]);
    }
  };
  const deleteStickyWall = async (id) => {
    const response = await deleteStickyRoute(id);
    const data = await response.json();

    if (data.statusCode === 200) {
      fetchStickyWall();
    }
  };
  const fetchStickyWall = async () => {
    const response = await getStickyRoute();
    const data = await response.json();
    if (data.statusCode === 200) {
      setAddData(() => {
        return data.data.map((item) => ({
          ...item,
          subTasks: item.subTasks,
          id: item._id,
          color: colors[getRandomIndex(colors)],
        }));
      });
    }

    setLoading(false);
  };
  useEffect(() => {
    fetchStickyWall();
  }, []);

  const openAddMore = () => {
    setAddMore(!addMore);
  };
  return (
    <section className="w-full ">
      <div>
        <HeaderComponent children={"Sticky Wall"} />
        <div className="rounded-lg border-[2px] px-[3px] py-[2px]">
          <div className="grid lg:grid-cols-4 md:grid-cols-3 md:gap-2  mx-3 my-[12px] ">
            <>
              {loading ? (
                <p>Loading...</p>
              ) : (
                addData.map((value) => {
                  console.log(value.color);
                  return (
                    <StickyWall
                      deleteStickyRoute={deleteStickyWall}
                      key={value.id}
                      id={value.id}
                      task={value.task}
                      color={value.color}
                      subTasks={value.subTasks}
                    />
                  );
                })
              )}
            </>

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
