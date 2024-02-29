import Task from "../../../../models/Task.js";

const createTask = (req, res) => {
  const { user_id } = req.params;
  const { title, description, status, categories_ids } = req.body;

  Task.create({ title, description, status, user_id, categories_ids })
    .then((task) => {
      return res.status(201).json(task);
    })
    .catch((error) => {
      return res.status(400).json({ error: error.message });
    });
};

export default createTask;
