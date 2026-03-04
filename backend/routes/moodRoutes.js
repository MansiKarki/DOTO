import express from "express";
import { setMood, getFilteredTasks } from "../controllers/moodController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, setMood);
router.get("/tasks", protect, getFilteredTasks);

export default router;