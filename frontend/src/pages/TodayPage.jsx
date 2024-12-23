import React, { useEffect, useState } from "react";
import { HeaderComponent } from "../components/HeaderComponent";

import {
  deleteTodoRoute,
  getAllTodosRoute,
  saveTodosRoute,
} from "../routes/todoRoutes";
import { Todos } from "./UpcomingPage";

export const TodayPage = () => {
  const [todoInput, setTodoInput] = useState("");
  const [addData, setTodos] = useState([]);

  const deleteTodo = async (id) => {
    const response = await deleteTodoRoute(id);
    const data = await response.json();
    setTodos((prevTodos) => {
      const updatedTodos = prevTodos.filter((todo) => todo._id !== id);
      return updatedTodos;
    });
  };
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
  }, []);
  return (
    <section className="w-full">
      <HeaderComponent children={"Today"} />
      <div>
        <Todos
          day={"Today"}
          todoArray={addData}
          setTodoInput={setTodoInput}
          deleteTodo={deleteTodo}
          sendFunc={saveTheTodo}
        />
      </div>
    </section>
  );
};
