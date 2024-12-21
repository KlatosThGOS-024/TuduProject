import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import {  getAllStickyWall, stickyWallSave } from "../controllers/stickyWall.controller.js";

const stickyWallRouter = Router();

stickyWallRouter.route("/save-sticky_wall").post( stickyWallSave);
stickyWallRouter.route("/all-sticky_wall-show").get( getAllStickyWall);


export default stickyWallRouter;
