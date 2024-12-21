import Todo from "../models/todo.model.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";

const todoSave = asyncHandler(async (req, res) => {
  const { task, description } = await req.body;
  if (task == " ") {
    throw new ApiError(400, "Provide taskName! Undefined task???");
  }
  const todoCreate = await Todo.create({
    task,
    description,
  });

  res.send(new ApiResponse(200, todoCreate, "TodoCreated Successfully"));
});
const allTodoSend = asyncHandler(async (req, res) => {
  const todos = await Todo.find({});

  res.send(new ApiResponse(200, todos, "TodoFound Successfully"));
});
const todoDelete = asyncHandler(async (req, res) => {
  const todoId = await req.body.todoId;
  if (todoId == " ") {
    return new ApiError(
      401,
      "Todo Id is not present something went wrong with frontend"
    );
  }
  const findTodo = await Todo.findByIdAndDelete({ _id: todoId }, {});
  const todos = await Todo.find({});
  res.send(new ApiResponse(200, todos, "TodoFound Successfully"));
});

export { todoSave, allTodoSend, todoDelete };
