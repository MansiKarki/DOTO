import Task from "../models/Task.js";

export const assignTask = async (req, res) => {
    const { taskId, memberId } = req.body;

    const task = await Task.findById(taskId);

    if (!task) return res.status(404).json({ message: "Task not found" });

    task.assignedTo = memberId;
    task.status = "pending";

    await task.save();

    res.json(task);
};
export const updateTaskStatus = async (req, res) => {

    const task = await Task.findById(req.params.id);

    if (!task) return res.status(404).json({ message: "Task not found" });

    task.status = req.body.status;

    await task.save();

    res.json(task);
};
export const getLeaderDashboard = async (req, res) => {

    const tasks = await Task.find({
        owner: req.user._id,
        assignedTo: { $ne: null }
    }).populate("assignedTo", "name email");

    res.json(tasks);
};