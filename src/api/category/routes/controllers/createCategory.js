import Category from "../../../../models/Category.js";

const createCategory = (req, res) => {
  const { name, color } = req.body;
  const { user_id } = req.params;
  
  Category.create({ name, color, user_id })
    .then((category) => {
      return res.status(201).json(category);
    })
    .catch((error) => {
      return res.status(400).json({ error: error.message });
    });
};

export default createCategory;