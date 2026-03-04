import User from "../models/User.js";

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        // Logic for login
        res.status(200).json({ message: "Login successful (dummy)" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const register = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;
        const newUser = new User({ name, email, password, role });
        await newUser.save();
        res.status(201).json({ message: "User registered" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
