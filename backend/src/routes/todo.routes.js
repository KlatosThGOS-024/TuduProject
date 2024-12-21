import { Router } from "express";
import {
  allTodoSend,
  todoDelete,
  todoSave,
} from "../controllers/todo.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const todoRouter = Router();

todoRouter.route("/save-todos").post(verifyJWT, todoSave);
todoRouter.route("/all-todos-show").get(verifyJWT, allTodoSend);
todoRouter.route("/todo-delete").post(verifyJWT, todoDelete);

export default todoRouter;
