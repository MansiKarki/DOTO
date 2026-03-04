import express from "express";
import { createTask, getTasks, reduceLoad, getBurnoutReport } from "../controllers/taskController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, createTask);
router.get("/", protect, getTasks);
router.get("/reduce-load", protect, reduceLoad);
router.get("/burnout-check", protect, getBurnoutReport);

export default router;
