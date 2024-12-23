import StickyWall from "../models/StickyWalls.models.js";
import Todo from "../models/todo.model.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";

const stickyWallSave = asyncHandler(async (req, res) => {
  try {
    const { task, subTasks } = await req.body;
    const userId = req.user._id;
    if (task == "" || subTasks == "") {
      throw new ApiError(
        400,
        "Provide taskName! and subTasks! Undefined task???"
      );
    }
    const stickyWallCreate = await StickyWall.create({
      task,
      subTasks,
      userId,
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
    const userId = req.user._id;
    const stickyWalls = await StickyWall.find({
      userId,
    });
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
export { stickyWallSave, getAllStickyWall, deleteStickyWall };
