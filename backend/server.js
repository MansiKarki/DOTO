import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import taskRoutes from "./routes/taskRoutes.js";
import leaderRoutes from "./routes/leaderRoutes.js";
import moodRoutes from "./routes/moodRoutes.js";




dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/leaderboard", leaderRoutes);
app.use("/api/mood", moodRoutes);



app.listen(5000, () => {
    console.log("Server running on port 5000");
});