import cookieParser from "cookie-parser";
import express from "express";
import userRouter from "./routes/user.routes.js";
import cors from "cors";
import todoRouter from "./routes/todo.routes.js";
import stickyWallRouter from "./routes/stickyWall.routes.js";
const app = express();

app.use(cors());
app.use(express.static("public"));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//UserRoute
app.use("/api/v1/users", userRouter);
app.use("/api/v1/todos", todoRouter);
app.use("/api/v1/stickyWall", stickyWallRouter);

export default app;
