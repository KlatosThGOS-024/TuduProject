import { model, Schema } from "mongoose";

const stickyWallSchema = new Schema(
  {
    task: {
      type: String,
      required: true,
    },
    subTasks: [
      {
        type: String,
        required: true,
      },
    ],
  },
  { timestamps: true }
);

const StickyWall = model("StickyWall", stickyWallSchema);
export default StickyWall;
