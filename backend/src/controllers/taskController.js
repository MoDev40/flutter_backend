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
    const tasks = await Task.find({ user }).sort({ createdAt: -1 });

    res.status(200).json(tasks);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching tasks Internal server error" });
  }
};

const editTask = async (req, res) => {
  try {
    const { id } = req.params;

    const { title, due } = req.body;

    const user = req.user;

    await Task.findOneAndUpdate(
      { $and: [{ user }, { _id: id }] },
      { $set: { title, due } }
    );

    res.status(200).json({ message: "Successfully updated" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error editing tasks Internal server error" });
  }
};

const isDoneTask = async (req, res) => {
  try {
    const { id } = req.params;

    const { isDone } = req.body;

    const user = req.user;

    await Task.findOneAndUpdate(
      { $and: [{ user }, { _id: id }] },
      { $set: { isDone } }
    );

    res.status(200).json({ message: "Successfully updated" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error editing task Internal server error" });
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;

    const user = req.user;

    await Task.findOneAndDelete({ $and: [{ user }, { _id: id }] });

    res.status(200).json({ message: "Successfully deleted" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting task Internal server error" });
  }
};

export { createTask, tasks, editTask, isDoneTask, deleteTask };
