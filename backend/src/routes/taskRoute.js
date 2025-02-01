import express from "express";
import {
  monthlyTaskAnalysis,
  overAllTasksAnalysis,
  overDueTask,
} from "../controllers/analysisController.js";
import {
  createTask,
  deleteTask,
  editTask,
  isDoneTask,
  tasks,
} from "../controllers/taskController.js";
import { auth } from "../middlewares/middleware.js";

const router = express.Router();

router.post("/create", auth, createTask);
router.get("/:date", auth, tasks);
router.put("/edit/:id", auth, editTask);
router.put("/done/:id", auth, isDoneTask);
router.delete("/delete/:id", auth, deleteTask);

router.get("/analysis/overall", auth, overAllTasksAnalysis);
router.get("/analysis/overdue", auth, overDueTask);
router.get("/analysis/month/:date", auth, monthlyTaskAnalysis);

export default router;
