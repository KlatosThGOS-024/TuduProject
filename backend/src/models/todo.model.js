import { model, mongoose, Schema } from "mongoose";

const todoSchema = new Schema(
  {
    task: {
      type: String,
      required: true,
    },
    day: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Todo = model("Todo", todoSchema);
export default Todo;
