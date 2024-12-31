import { Schema, Types, model } from "mongoose";

const taskSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    due: {
      type: Date,
      required: true,
    },
    user: {
      type: Types.ObjectId,
      required: true,
    },
  },
  { timestamps: true }
);

const Task = model("Task", taskSchema);

export default Task;
