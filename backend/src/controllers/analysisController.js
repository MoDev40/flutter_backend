import Task from "../models/task.js";
import { dateSpecified } from "../utils/utils.js";

const dailyTasksAnalysis = async (req, res) => {
  try {
    const user = req.user;

    const day = new Date();

    const { startOfDay, endOfDay } = dateSpecified(day);

    const tasks = await Task.find({
      $and: [{ user }, { createdAt: { $gt: startOfDay, $lte: endOfDay } }],
    }).sort({ createdAt: -1 });

    let done = 0;
    let unDone = 0;

    console.log({ startOfDay, endOfDay });
    tasks.forEach((task) => (task.isDone ? done++ : unDone++));

    res.status(200).json({ done, unDone });
  } catch (error) {
    res.status(500).json({
      message: "Error fetching tasks analysis Internal server error",
    });
  }
};

export { dailyTasksAnalysis };
