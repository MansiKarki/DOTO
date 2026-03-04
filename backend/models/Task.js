import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  title: String,
  description: String,
  deadline: Date,
  priority: String,
  estimatedTime: Number,
  actualTime: Number,
  moodTag: String,
  assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  status: { type: String, default: "pending" }
});

const Task = mongoose.model("Task", taskSchema);
export default Task;
