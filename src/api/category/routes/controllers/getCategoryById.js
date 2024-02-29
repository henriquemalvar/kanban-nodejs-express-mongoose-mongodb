import Category from "../../../../models/Category.js";

const getCategoryById = (req, res) => {
  const { id } = req.params;
  Category.findById(id)
    .then((category) => {
      return res.status(200).json({
        data: category,
      });
    })
    .catch((error) => {
      return res.status(400).json({ error: error.message });
    });
};

export default getCategoryById;
