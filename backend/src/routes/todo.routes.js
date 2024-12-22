import { Router } from "express";
import {
  allTodoSend,
  todoDelete,
  todoSave,
} from "../controllers/todo.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const todoRouter = Router();

todoRouter.route("/save-todo").post(todoSave);
todoRouter.route("/all-todos-get").get(allTodoSend);
todoRouter.route("/todo-delete").post(todoDelete);

export default todoRouter;
