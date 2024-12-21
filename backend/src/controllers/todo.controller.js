import Todo from "../models/todo.model.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";

const todoSave = asyncHandler(async (req, res) => {
  try {
    const { task, day } = await req.body;
    if (task == "") {
      throw new ApiError(400, "Provide taskName! Undefined task???");
    }
    const todoCreate = await Todo.create({
      status: day,
      task,
    });

    res.send(new ApiResponse(200, todoCreate, "TodoCreated Successfully"));
  } catch (error) {
    res.status(400).send(new ApiError(400, "TodoCreated Successfully", error));
  }
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
