import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import {
  deleteStickyWall,
  getAllStickyWall,
  stickyWallSave,
} from "../controllers/stickyWall.controller.js";

const stickyWallRouter = Router();

stickyWallRouter.route("/save-sticky_wall").post(verifyJWT, stickyWallSave);
stickyWallRouter.route("/get-sticky_walls").get(verifyJWT, getAllStickyWall);
stickyWallRouter.route("/delete-sticky_wall").post(verifyJWT, deleteStickyWall);

export default stickyWallRouter;
