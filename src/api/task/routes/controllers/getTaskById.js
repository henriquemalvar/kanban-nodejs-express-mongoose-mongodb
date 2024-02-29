import Task from "../../../../models/Task.js";

const getTaskById = (req, res) => {
  const { id } = req.params;
  Task.findById(id)
    .then((task) => {
      return res.status(200).json({
        data: task,
      });
    })
    .catch((error) => {
      return res.status(400).json({ error: error.message });
    });
};

export default getTaskById;
