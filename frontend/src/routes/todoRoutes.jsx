const deleteTodoRoute = async (todoId) => {
  const response = await fetch(
    `http://localhost:8000/api/v1/todos/todo-delete`,
    {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({ todoId }),
    }
  );
  return response;
};
const saveTodosRoute = async (task, description) => {
  const response = await fetch(
    "http://localhost:8000/api/v1/todos/save-todos",
    {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },

      body: JSON.stringify({ task, description }),
    }
  );
  return response;
};
const getAllTodosRoute = async () => {
  const response = await fetch(
    "http://localhost:8000/api/v1/todos/all-todos-show",
    {
      method: "GET",
      credentials: "include",
      header: {
        "Content-Type": "application/json",
      },
    }
  );
  console.log(response);
  return response;
};

const addStickyRoute = async (task, subTasks) => {
  console.log(task, subTasks);
  const response = await fetch(
    "http://localhost:8000/api/v1/stickyWall/save-sticky_wall",
    {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },

      body: JSON.stringify({ task, subTasks: [subTasks] }),
    }
  );
  return response;
};

export { deleteTodoRoute, saveTodosRoute, getAllTodosRoute, addStickyRoute };
