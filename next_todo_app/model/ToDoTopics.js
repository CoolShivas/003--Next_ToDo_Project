import mongoose, { Schema } from "mongoose";

const topicSchema = new Schema(
  {
    title: String,
    description: String,
  },
  {
    timestamps: true,
  }
);

const ToDoTopics =
  mongoose.model.ToDoTopics || mongoose.model("ToDoTopics", topicSchema);

export default ToDoTopics;
