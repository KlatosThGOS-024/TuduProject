import React, { useEffect, useRef, useState } from "react";
import { HeaderComponent } from "../components/HeaderComponent";
import {
  deleteTodoRoute,
  getAllTodosRoute,
  saveTodosRoute,
} from "../routes/todoRoutes";
function Input({ placeholder, sendFunc, setTodoInput, day }) {
  return (
    <div className=" rounded-lg border-2 flex items-center gap-2 px-[12px] bg-white w-full">
      <img
        onClick={sendFunc}
        className=" cursor-pointer w-[18px]"
        src="/icons/plus-large-thick-svgrepo-com.svg"
      ></img>
      <input
        onChange={(e) => {
          setTodoInput({ task: e.target.value, day });
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
function Todos({ day, todoArray, setTodoInput, sendFunc, deleteTodo }) {
  return (
    <div className=" border-[1px] rounded-lg px-[18px] py-[12px]">
      <div>
        <HeaderComponent classAttribute={"text-[24px]"} children={day} />
      </div>
      <div>
        <Input
          sendFunc={sendFunc}
          placeholder={"Add New Task"}
          setTodoInput={setTodoInput}
          day={day}
        ></Input>
      </div>
      <div className="my-[18px]">
        {todoArray.map((value) => {
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
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState("");
  const [UpComingTodo, setUpcTodos] = useState([]);
  const [TomoTodo, setTomoTodos] = useState([]);
  const [WeekTodo, setWeekTodos] = useState([]);
  const [refresh, setRefresh] = useState(false);
  useEffect(() => {
    console.log(todos);
    setUpcTodos(todos.filter((todo) => todo.day === "upcoming"));
    setTomoTodos(todos.filter((todo) => todo.day === "tomorrow"));
    setWeekTodos(todos.filter((todo) => todo.day === "week"));
  }, [todos]);
  const saveTheTodo = async () => {
    const response = await saveTodosRoute(todoInput.task, todoInput.day);
    const data = await response.json();
    setTodos((prevTodos) => {
      const updatedTodos = {
        task: data.data.task,
        _id: data.data._id,
        day: data.data.day,
      };
      return [...prevTodos, updatedTodos];
    });

    setTodoInput("");
  };

  const deleteTodo = async (id) => {
    const response = await deleteTodoRoute(id);
    const data = await response.json();
    setTodos((prevTodos) => {
      const updatedTodos = prevTodos.filter((todo) => todo._id !== id);
      return updatedTodos;
    });
  };

  const fetchTodos = async () => {
    const response = await getAllTodosRoute();
    const data = await response.json();
    if (data.statusCode === 200) {
      setTodos((prevTodos) => {
        const combinedTodos = [...prevTodos, ...data.data];
        const uniqueTodos = combinedTodos.filter(
          (value, index, self) =>
            index === self.findIndex((t) => t._id === value._id)
        );

        return uniqueTodos;
      });
    }
  };

  useEffect(() => {
    fetchTodos();
  }, [refresh]);

  return (
    <section className="w-full">
      <HeaderComponent children={"Upcoming"} />
      <div>
        <Todos
          deleteTodo={deleteTodo}
          sendFunc={saveTheTodo}
          setTodoInput={setTodoInput}
          todoArray={UpComingTodo}
          day={"upcoming"}
        />
        <div className=" my-[18px] grid grid-cols-2 gap-4">
          <Todos
            deleteTodo={deleteTodo}
            sendFunc={saveTheTodo}
            setTodoInput={setTodoInput}
            todoArray={TomoTodo}
            day={"tomorrow"}
          />
          <Todos
            deleteTodo={deleteTodo}
            sendFunc={saveTheTodo}
            setTodoInput={setTodoInput}
            todoArray={WeekTodo}
            day={"week"}
          />
        </div>
      </div>
    </section>
  );
};
