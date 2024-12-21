import jwt from "jsonwebtoken";
import ApiError from "../utils/ApiError.js";
import asyncHandler from "../utils/asyncHandler.js";
import User from "../models/user.model.js";

export const verifyJWT = asyncHandler(async (req, res, next) => {
  try {
    const token = req.cookies?.accessToken;

    if (!token) {
      throw new ApiError(400, "token not found");
    }
    const decodeToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    const user = await User.findById(decodeToken._id);

    if (!user) {
      throw new ApiError(400, "user not found/login");
    }
    req.user = user;

    next();
  } catch (error) {
    res
      .status(409)
      .json(new ApiError(409, "Cookie is not present or u tried to change it"));
  }
});
