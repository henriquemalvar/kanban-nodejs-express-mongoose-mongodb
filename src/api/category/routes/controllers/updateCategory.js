import Category from "../../../../models/Category.js";

const updateCategory = (req, res) => {
  const { id } = req.params;
  const { name, color } = req.body;
  Category.update({ name, color }, { where: { id } })
    .then((category) => {
      return res.status(200).json({
        data: category,
      });
    })
    .catch((error) => {
      return res.status(400).json({ error: error.message });
    });
};

export default updateCategory;
