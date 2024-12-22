import StickyWall from "../models/StickyWalls.models.js";
import Todo from "../models/todo.model.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";

const stickyWallSave = asyncHandler(async (req, res) => {
  try {
    const { task, subTasks } = await req.body;
    if (task == "" || subTasks == "") {
      throw new ApiError(
        400,
        "Provide taskName! and subTasks! Undefined task???"
      );
    }
    const stickyWallCreate = await StickyWall.create({
      task,
      subTasks,
    });

    res.send(
      new ApiResponse(200, stickyWallCreate, "stickyWall create Successfully")
    );
  } catch (error) {
    res
      .status(400)
      .send(new ApiError(400, "stickyWall create Un-Successfully", error));
  }
});
const getAllStickyWall = asyncHandler(async (req, res) => {
  try {
    const stickyWalls = await StickyWall.find({});

    res.send(new ApiResponse(200, stickyWalls, "TodoFound Successfully"));
  } catch (error) {
    res
      .status(400)
      .send(new ApiError(400, "stickyWall send Un-Successfully", error));
  }
});
const deleteStickyWall = asyncHandler(async (req, res) => {
  try {
    const { id } = req.body;
    const request = await StickyWall.findByIdAndDelete(id);
    res.send(new ApiResponse(200, request, "StickyWall deleted Successfully"));
  } catch (error) {
    res
      .status(400)
      .send(new ApiError(400, "stickyWall deleted Un-Successfully", error));
  }
});
// const todoDelete = asyncHandler(async (req, res) => {
//   const todoId = await req.body.todoId;
//   if (todoId == " ") {
//     return new ApiError(
//       401,
//       "Todo Id is not present something went wrong with frontend"
//     );
//   }
//   const findTodo = await Todo.findByIdAndDelete({ _id: todoId }, {});
//   const todos = await Todo.find({});
//   res.send(new ApiResponse(200, todos, "TodoFound Successfully"));
// });

export { stickyWallSave, getAllStickyWall, deleteStickyWall };
