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

    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

const StickyWall = model("StickyWall", stickyWallSchema);
export default StickyWall;
