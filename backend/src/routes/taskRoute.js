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

const router = express.Router();

router.post("/create", auth, createTask);
router.get("/", auth, tasks);
router.get("/top", auth, topDailyTasks);
router.put("/edit/:id", auth, editTask);
router.put("/done/:id", auth, isDoneTask);
router.delete("/delete/:id", auth, deleteTask);

export default router;
