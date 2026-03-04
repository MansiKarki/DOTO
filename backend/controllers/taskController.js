import Task from "../models/Task.js";

export const createTask = async (req, res) => {
    try {
        const { title, description, deadline, priority, estimatedTime, moodTag, assignedTo } = req.body;
        const newTask = new Task({ title, description, deadline, priority, estimatedTime, moodTag, assignedTo });
        await newTask.save();
        res.status(201).json(newTask);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
