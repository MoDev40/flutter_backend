import express from "express";
import { createTask } from "../controllers/taskController.js";
import { auth } from "../middlewares/middleware.js";

const router = express.Router();

router.post("/create", auth, createTask);

export default router;
