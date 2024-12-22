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
const saveTodosRoute = async (task, day) => {
  const response = await fetch("http://localhost:8000/api/v1/todos/save-todo", {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },

    body: JSON.stringify({ task, day }),
  });
  return response;
};
const getAllTodosRoute = async () => {
  const response = await fetch(
    "http://localhost:8000/api/v1/todos/all-todos-get",
    {
      method: "GET",
      credentials: "include",
      header: {
        "Content-Type": "application/json",
      },
    }
  );

  return response;
};

const addStickyRoute = async (task, subTasks) => {
  const input = subTasks;
  const result = input.split(",").map((item) => item.trim());

  const response = await fetch(
    "http://localhost:8000/api/v1/stickyWall/save-sticky_wall",
    {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },

      body: JSON.stringify({ task, subTasks: result }),
    }
  );
  return response;
};
const getStickyRoute = async (task, subTasks) => {
  const response = await fetch(
    "http://localhost:8000/api/v1/stickyWall/get-sticky_walls",
    {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    }
  );
  return response;
};
const deleteStickyRoute = async (stickyWallId) => {
  const response = await fetch(
    "http://localhost:8000/api/v1/stickyWall/delete-sticky_wall",
    {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },

      body: JSON.stringify({ id: stickyWallId }),
    }
  );
  return response;
};
export {
  deleteTodoRoute,
  saveTodosRoute,
  getAllTodosRoute,
  addStickyRoute,
  getStickyRoute,
  deleteStickyRoute,
};
