import mongoose from "mongoose";
import Category from "../../../../models/Category.js";
import Task from "../../../../models/Task.js";

const deleteCategory = (req, res) => {
  const { id } = req.params;

  const categoryId = mongoose.Types.ObjectId(id);

  Category.findByIdAndRemove(categoryId)
    .then(() => {
      return Task.updateMany(
        { categories_ids: categoryId },
        { $pull: { categories_ids: categoryId } }
      );
    })
    .then(() => {
      return res.status(200).json({ message: "Category deleted successfully" });
    })
    .catch((error) => {
      return res.status(400).json({ error: error.message });
    });
};

export default deleteCategory;
