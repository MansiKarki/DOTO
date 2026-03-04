import Task from "../models/Task.js";
import { detectBurnout } from "../utils/burnoutLogic.js";


export const createTask = async (req, res) => {
    try {
        const { title, description, deadline, priority, estimatedTime, moodTag, assignedTo } = req.body;
        const newTask = new Task({
            title,
            description,
            deadline,
            priority,
            estimatedTime,
            moodTag,
            assignedTo,
            owner: req.user._id
        });
        await newTask.save();
        res.status(201).json(newTask);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find({ owner: req.user._id });
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const reduceLoad = async (req, res) => {
    try {
        let tasks = await Task.find({
            owner: req.user._id,
            status: "pending"
        }).sort({ priority: -1, deadline: 1 });

        const topThree = tasks.slice(0, 3);
        res.json(topThree);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getBurnoutReport = async (req, res) => {
    try {
        const tasks = await Task.find({ owner: req.user._id });
        const isBurnedOut = detectBurnout(tasks);
        res.json({ burnout: isBurnedOut });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
