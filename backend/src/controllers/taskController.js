import Task from "../models/task.js";

const createTask = async (req, res) => {
  try {
    const { title, description, due } = req.body;
    const user = req.user;

    console.log(user);
    console.log(new Date().toLocaleDateString());

    const task = new Task({ title, description, due, user });

    await task.save();

    res.status(201).json({ message: "Task saved successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating task Internal server error" });
  }
};

export { createTask };
