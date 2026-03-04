import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import {
    assignTask,
    updateTaskStatus,
    getLeaderDashboard
} from "../controllers/leaderController.js";

const router = express.Router();

router.post("/assign", protect, assignTask);
router.put("/status/:id", protect, updateTaskStatus);
router.get("/dashboard", protect, getLeaderDashboard);

export default router;