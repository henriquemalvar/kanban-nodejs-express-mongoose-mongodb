import { Types } from "mongoose";
import Category from "../../../../models/Category.js";

const getCategories = (req, res) => {
  const { user_id } = req.params;
  const { _id, name, color, enabled } = req.body;
  let match = {};

  if (_id) {
    match._id = { $oid: _id };
  }

  if (name) {
    match.name = name;
  }

  if (color) {
    match.color = color;
  }

  if (user_id && Types.ObjectId.isValid(user_id)) {
    match.user_id = Types.ObjectId.createFromHexString(user_id);
  }

  if (enabled !== undefined) {
    match.enabled = enabled;
  }

  Category.aggregate([
    {
      $match: match,
    },
    {
      $lookup: {
        from: "users",
        localField: "user_id",
        foreignField: "_id",
        as: "user",
      },
    },
    {
      $unwind: "$user",
    },
    {
      $project: {
        _id: 1,
        name: 1,
        color: 1,
        user: {
          _id: 1,
          name: 1,
          email: 1,
        },
        enabled: 1,
        createdAt: 1,
        updatedAt: 1,
      },
    },
  ])
    .then((categories) => {
      return res.status(200).json(categories);
    })
    .catch((error) => {
      return res.status(400).json({ error: error.message });
    });
};

export default getCategories;
