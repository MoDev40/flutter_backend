import express from "express";
import {
  createTask,
  deleteTask,
  editTask,
  isDoneTask,
  tasks,
  topDailyTasks,
} from "../controllers/taskController.js";
import { auth } from "../middlewares/middleware.js";
import {
  dailyTasksAnalysis,
  overAllTasksAnalysis,
} from "../controllers/analysisController.js";

const router = express.Router();

router.post("/create", auth, createTask);
router.get("/", auth, tasks);
router.get("/top", auth, topDailyTasks);
router.put("/edit/:id", auth, editTask);
router.put("/done/:id", auth, isDoneTask);
router.delete("/delete/:id", auth, deleteTask);

router.get("/analysis/daily", auth, dailyTasksAnalysis);
router.get("/analysis/overall", auth, overAllTasksAnalysis);

export default router;
