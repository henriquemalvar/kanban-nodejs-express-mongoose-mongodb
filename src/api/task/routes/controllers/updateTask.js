import Task from "../../../../models/Task.js";

const updateTask = (req, res) => {
  const { title, description, status, user_id, categories_ids, enabled } =
    req.body;

  if (!req.params.id) {
    return res.status(400).json({ error: "Task ID is required" });
  }

  Task.findByIdAndUpdate(
    req.params.id,
    { title, description, status, user_id, categories_ids, enabled },
    { new: true }
  )
    .then((task) => {
      if (!task) {
        return res.status(404).json({ error: "Task not found" });
      }
      return res.status(200).json({
        data: task,
      });
    })
    .catch((error) => {
      return res.status(400).json({ error: error.message });
    });
};

export default updateTask;
