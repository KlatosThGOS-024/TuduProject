import React, { useEffect, useState } from "react";
import { HeaderComponent } from "../components/HeaderComponent";
import {
  deleteStickyRoute,
  deleteTodoRoute,
  getAllTodosRoute,
  saveTodosRoute,
} from "../routes/todoRoutes";
function Input({ placeholder, sendFunc, setInput, day }) {
  const [input, setInput1] = useState();
  const handleClic = () => {
    setInput({ task: input, day: day });
    sendFunc();
  };

  return (
    <div className=" rounded-lg border-2 flex items-center gap-2 px-[12px] bg-white w-full">
      <img
        onClick={handleClic}
        className=" cursor-pointer w-[18px]"
        src="/icons/plus-large-thick-svgrepo-com.svg"
      ></img>
      <input
        onChange={(e) => {
          setInput1(e.target.value);
        }}
        className=" outline-none px-[5px] w-full py-[8px] placeholder:text-gray-400"
        placeholder={placeholder}
      ></input>
    </div>
  );
}

function Todo({ todo, deleteTodo, id }) {
  return (
    <>
      <div className=" my-[12px] flex items-center gap-2 text-gray-800">
        <input
          onClick={() => {
            deleteTodo(id);
          }}
          type="checkbox"
        ></input>
        <p>{todo}</p>
      </div>
      <hr></hr>
    </>
  );
}
function Todos({ day, data, setInput, sendFunc, deleteTodo }) {
  return (
    <div className=" border-[1px] rounded-lg px-[18px] py-[12px]">
      <div>
        <HeaderComponent classAttribute={"text-[24px]"} children={day} />
      </div>
      <div>
        <Input
          sendFunc={sendFunc}
          placeholder={"Add New Task"}
          setInput={setInput}
          day={day}
        ></Input>
      </div>
      <div className="my-[18px]">
        {data.map((value) => {
          return (
            <Todo
              deleteTodo={deleteTodo}
              todo={value.task}
              id={value._id}
              key={value._id}
            />
          );
        })}
      </div>
    </div>
  );
}
export const UpcomingPage = () => {
  // const [addMore, setAddMore] = useState(false);
  const [addTomoTodo, setAddTomoTodo] = useState(null);
  const [addUpComingTodo, setAddUpComingTodo] = useState(null);
  const [addWeekTodo, setAddWeekTodo] = useState(null);

  // const [addSubTasks, setAddSubTask] = useState([""]);
  const [upcomingData, setUpcomingData] = useState([
    { task: "Research content idea", _id: 1 },
  ]);
  const [tommorrowData, setTommorrowData] = useState([
    { task: "Research content idea", _id: 12 },
  ]);
  const [thisWeekData, setThisweekData] = useState([
    { task: "Research content idea", _id: 14 },
  ]);
  const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   if (addTask && addTask.task.length > 0) {
  //     sendFunc();
  //   }
  // }, [addTask]);
  const CheckPresentOrNot = async (
    addTask,
    setAddData,
    setAddTask,
    dataList
  ) => {
    if (addTask && addTask.task.length > 0) {
      // Check if task already exists in the current list
      const isDuplicate = dataList.some((item) => item.task === addTask.task);

      if (!isDuplicate) {
        const response = await saveTodosRoute(addTask.task, addTask.day);
        const data = await response.json();

        // Only add if not a duplicate
        setAddData((prevData) => [
          ...prevData,
          { task: data.data.task, id: data.data._id },
        ]);
      }

      setAddTask(null);
    }
  };

  const sendFunc = async () => {
    if (addUpComingTodo) {
      CheckPresentOrNot(
        addUpComingTodo,
        setUpcomingData,
        setAddUpComingTodo,
        upcomingData
      );
    } else if (addTomoTodo) {
      CheckPresentOrNot(
        addTomoTodo,
        setTommorrowData,
        setAddTomoTodo,
        tommorrowData
      );
    } else {
      CheckPresentOrNot(
        addWeekTodo,
        setThisweekData,
        setAddWeekTodo,
        thisWeekData
      );
    }
  };

  const deleteTodo = async (id) => {
    const response = await deleteTodoRoute(id);
    const data = await response.json();

    if (data.statusCode === 200) {
      fetchTodos();
    }
  };
  // setAddData(() => {
  //   return data.data.map((item) => ({
  //     ...item,
  //     task: item.task,
  //     id: item._id,
  //   }));
  // });

  const fetchTodos = async () => {
    const response = await getAllTodosRoute();
    const data = await response.json();
    if (data.statusCode === 200) {
      data.data.forEach((todo) => {
        if (todo.day === "upcoming") {
          setUpcomingData((prevData) => [...prevData, todo]);
        } else if (todo.day === "Tomorrow") {
          setTommorrowData((prevData) => [...prevData, todo]);
        } else if (todo.day === "This Week") {
          setThisweekData((prevData) => [...prevData, todo]);
        }
      });
    }
  };

  //   setLoading(false);
  // };
  useEffect(() => {
    fetchTodos();
  }, []);

  // // const openAddMore = () => {
  // //   setAddMore(!addMore);
  // // };

  return (
    <section className="w-full">
      <HeaderComponent children={"Upcoming"} />
      <div>
        <Todos
          deleteTodo={deleteTodo}
          sendFunc={sendFunc}
          setInput={setAddUpComingTodo}
          data={upcomingData}
          day={"upcoming"}
        />
        <div className=" my-[18px] grid grid-cols-2 gap-4">
          <Todos
            deleteTodo={deleteTodo}
            sendFunc={sendFunc}
            setInput={setAddTomoTodo}
            data={tommorrowData}
            day={"Tomorrow"}
          />
          <Todos
            deleteTodo={deleteTodo}
            sendFunc={sendFunc}
            setInput={setAddWeekTodo}
            data={thisWeekData}
            day={"This Week"}
          />
        </div>
      </div>
    </section>
  );
};
