import express from "express";
import { createTask, editTask, tasks } from "../controllers/taskController.js";
import { auth } from "../middlewares/middleware.js";

const router = express.Router();

router.post("/create", auth, createTask);
router.get("/", auth, tasks);
router.put("/edit/:id", auth, editTask);

export default router;
