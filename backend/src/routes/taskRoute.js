import express from "express";
import { createTask, tasks } from "../controllers/taskController.js";
import { auth } from "../middlewares/middleware.js";

const router = express.Router();

router.post("/create", auth, createTask);
router.get("/", auth, tasks);

export default router;
