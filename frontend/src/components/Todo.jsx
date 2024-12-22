import { useEffect, useState } from "react";
import { Todos } from "./Todos";
import { Logout } from "./Logout";
import { getAllTodosRoute, saveTodosRoute } from "../routes/todoRoutes";

const AddTodo = ({ task, setTask, description, setDescription }) => {
  const saveTheInputs = (event, setValue) => {
    setValue(event.target.value);
  };
  return (
    <>
      <div className=" py-2 w-full space-y-2">
        <input
          value={task}
          onChange={(event) => {
            saveTheInputs(event, setTask);
          }}
          placeholder="Task Name"
          className="w-full placeholder:font-[600] font-[600] outline-none "
        />
        <input
          value={description}
          onChange={(event) => {
            saveTheInputs(event, setDescription);
          }}
          placeholder="Description"
          className="w-full outline-none "
        />
      </div>
    </>
  );
};

const SaveButton = ({ task, description, handleRefresh }) => {
  const saveTodos = async () => {
    const response = await saveTodosRoute(task, description);
    const data = await response.json();

    if (data.statusCode == 409) {
      alert("re-login please ");
      return;
    }
    handleRefresh();
  };

  return (
    <section
      className=" py-2  w-full text-end
     border-2 rounded-md border-t-0 space-x-4"
    >
      <button className="rounded-md px-3 py-2 bg-gray-300 opacity-60 text-black font-Fredoka">
        Cancel
      </button>
      <button
        onClick={saveTodos}
        className="rounded-md bg-red-500 px-3 py-2 text-white font-Fredoka"
      >
        Add task
      </button>
    </section>
  );
};
const DueDate = () => {
  const [remove, setRemove] = useState(false);
  const showCross = () => {
    setRemove(!remove);
  };
  return (
    <section className=" w-fit">
      <div
        className={`   px-[16px] py-[2px] border-[1px] rounded-md text-gray-700 flex items-center gap-[3px] text-[16px] ${
          remove ? "hidden" : "block"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="none"
          viewBox="0 0 16 16"
          className="date_today"
          aria-hidden="true"
        >
          <path
            fill="currentColor"
            fill-rule="evenodd"
            d="M12 2H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2ZM3 12V6h10v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Zm8.5-1.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <span>Today</span>
        <button onClick={showCross}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="none"
            viewBox="0 0 16 16"
            className=" mt-[3px] text-gray-700"
          >
            <path
              fill="currentColor"
              fill-rule="evenodd"
              d="M11.854 11.854a.5.5 0 0 0 0-.707L8.707 8l3.147-3.146a.5.5 0 0 0-.708-.707L8 7.293 4.854 4.147a.5.5 0 1 0-.708.707L7.293 8l-3.147 3.147a.5.5 0 1 0 .708.707L8 8.708l3.146 3.146a.5.5 0 0 0 .708 0Z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
      <div
        className={`border-[1px] rounded-md text-green-400 
          px-[16px] py-[2px] flex items-center
         border-gray-300 gap-[3px] text-[16px] ${remove ? "block" : "hidden"}`}
      >
        <button onClick={showCross}>Due Date</button>
      </div>
    </section>
  );
};
const PrefDiv = () => {
  return (
    <>
      <div className=" ">
        <DueDate />
      </div>
    </>
  );
};
export const Todo = () => {
  const [refresh, setRefresh] = useState(true);
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const initialValue = 0;
  const date = new Date();
  const handleRefresh = () => {
    setRefresh((prev) => !prev);
  };
  const getTodos = async () => {
    const response = await getAllTodosRoute();
    const data = await response.json();

    if (data.statusCode == 409) {
      alert("re-login please ");
      return;
    }
    if (Array.isArray(data.data)) {
      setTodos(data.data);
    } else {
      setTodos([]);
    }
  };

  useEffect(() => {
    getTodos();
  }, [refresh]);

  const today = `${date.getDate()} ${date.toLocaleDateString("en-US", {
    month: "long",
  })}-Today-${date.toLocaleDateString("en-US", { weekday: "long" })} `;

  return (
    <section className="w-[1200px] mx-auto ">
      <Logout />
      <div
        className=" grid place-items-center place-content-center
         space-y-2"
      >
        <div>
          <h3 className=" font-custom font-[700] text-3xl">Today</h3>
          <p className=" text-[16px] text-gray-700 flex items-center  ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="none"
              viewBox="0 0 16 16"
              aria-hidden="true"
            >
              <path
                fill="currentColor"
                fill-rule="evenodd"
                d="M8 14.001a6 6 0 1 1 0-12 6 6 0 0 1 0 12Zm0-1a5 5 0 1 0 0-10 5 5 0 0 0 0 10ZM5.146 8.147a.5.5 0 0 1 .708 0L7 9.294l3.146-3.147a.5.5 0 0 1 .708.708l-3.5 3.5a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 0-.708Z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span className=" relative">
              {" "}
              {todos1.reduce((accumulator, currentValue) => {
                return accumulator + Number(currentValue);
              }, initialValue)}{" "}
            </span>
            <span className=" ml-[5px]">tasks</span>
          </p>
        </div>
        {/* Todo */}
        <div className=" border-b-2 w-full pb-2 place-self-start ">{today}</div>

        <div className=" w-full space-y-3 rounded-lg border-2 pt-[10px] px-[10px]">
          <AddTodo
            task={task}
            setTask={setTask}
            description={description}
            setDescription={setDescription}
          />
          <PrefDiv />
        </div>
        <SaveButton
          handleRefresh={handleRefresh}
          task={task}
          description={description}
        />
        <div>
          <Todos todos={todos} handleRefresh={handleRefresh} />
        </div>
      </div>
    </section>
  );
};
