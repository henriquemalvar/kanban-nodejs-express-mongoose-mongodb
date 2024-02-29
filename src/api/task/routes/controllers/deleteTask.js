import Task from "../../../../models/Task.js";

const deleteTaskById = (req, res) => {
  const { id } = req.params;
  Task.findByIdAndDelete(id)
    .then(() => {
      return res.status(200).json({ message: "Task deleted successfully" });
    })
    .catch((error) => {
      return res.status(400).json({ error: error.message });
    });
};

export default deleteTaskById;
