import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({

  title: String,
  description: String,
  deadline: Date,

  priority: {
    type: String,
    enum: ["low", "medium", "high"]
  },

  estimatedTime: Number,
  actualTime: Number,

  status: {
    type: String,
    enum: ["pending", "in-progress", "completed", "postponed"],
    default: "pending"
  },

  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },

  assignedTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }

}, { timestamps: true });

export default mongoose.model("Task", taskSchema);