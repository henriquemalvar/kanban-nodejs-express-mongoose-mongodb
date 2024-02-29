import User from "../../../../models/User.js";
import Task from "../../../../models/Task.js";
import Category from "../../../../models/Category.js";

const deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findByIdAndRemove(id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Delete all tasks and categories associated with the user
    await Task.deleteMany({ user_id: id });
    await Category.deleteMany({ user_id: id });

    return res.status(200).json({
      data: user,
    });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

export default deleteUser;