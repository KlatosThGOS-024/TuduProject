import React, { useEffect, useState } from "react";
import { HeaderComponent } from "../components/HeaderComponent";
import { AddStickyWall, StickyWall } from "../components/StickyWall";
import { Input } from "./TodayPage";
import {
  addStickyRoute,
  deleteStickyRoute,
  getStickyRoute,
} from "../routes/todoRoutes";
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
  const [addData, setAddData] = useState([""]);
  const [loading, setLoading] = useState(true);
  const addStickyWall = async () => {
    const response = await addStickyRoute(addTask, addSubTasks);
    const data = await response.json();

    if (data.statusCode === 200) {
      setAddData((prevData) => [
        ...prevData,
        { task: addTask, subTasks: data.data.subTasks },
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
          subTask: item.subTasks,
          id: item._id,
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
    <section className="w-full">
      <div>
        <HeaderComponent children={"Sticky Wall"} />
        <div className=" rounded-lg border-[2px] px-[3px] py-[2px]">
          <div className="grid grid-cols-4 mx-3 my-[12px] ">
            <>
              {loading ? (
                <p>Loading...</p>
              ) : (
                addData.map((value, index) => (
                  <StickyWall
                    deleteStickyRoute={deleteStickyWall}
                    key={value.id}
                    id={value.id}
                    color="red"
                    task={value.task}
                    subTask={value.subTasks}
                  />
                ))
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
