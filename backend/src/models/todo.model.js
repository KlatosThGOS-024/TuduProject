import { model, mongoose, Schema } from "mongoose";

const todoSchema = new Schema(
  {
    task: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
  },
  { timestamps: true }
);

const Todo = model("Todo", todoSchema);
export default Todo;
