import express from "express";
import {
  createTask,
  editTask,
  isDoneTask,
  tasks,
} from "../controllers/taskController.js";
import { auth } from "../middlewares/middleware.js";

const router = express.Router();

router.post("/create", auth, createTask);
router.get("/", auth, tasks);
router.put("/edit/:id", auth, editTask);
router.put("/done/:id", auth, isDoneTask);

export default router;
