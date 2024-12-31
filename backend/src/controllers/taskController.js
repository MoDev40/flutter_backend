import Task from "../models/task.js";

const createTask = async (req, res) => {
  try {
    const { title, description, due } = req.body;
    const user = req.user;

    const task = new Task({ title, description, due, user });

    await task.save();

    res.status(201).json({ message: "Task saved successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating task Internal server error" });
  }
};

const tasks = async (req, res) => {
  try {
    const user = req.user;
    const tasks = await Task.find({ user }).sort({ createdAt: - 1 });

    res.status(200).json({ tasks });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching tasks Internal server error" });
  }
};

export { createTask, tasks };
