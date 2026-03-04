import Mood from "../models/Mood.js";
import Task from "../models/Task.js";

// Save daily mood
export const setMood = async (req, res) => {
    const { mood } = req.body;

    const newMood = await Mood.create({
        user: req.user._id,
        mood
    });

    res.json(newMood);
};

export const getFilteredTasks = async (req, res) => {
    // Basic implementation for now, can be expanded to filter by mood
    const tasks = await Task.find({ owner: req.user._id });
    res.json(tasks);
};
