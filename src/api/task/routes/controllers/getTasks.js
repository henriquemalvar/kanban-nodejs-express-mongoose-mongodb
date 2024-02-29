import { Types } from "mongoose";
import Task from "../../../../models/Task.js";

const getTasks = (req, res) => {
  const { user_id } = req.params;
  const { _id, title, status, categories_ids, enabled } = req.body;
  let match = {};

  if (_id) {
    match._id = _id;
  }

  if (title) {
    match.title = title;
  }

  if (status) {
    match.status = status;
  }

  if (user_id) {
    match.user_id = Types.ObjectId.createFromHexString(user_id);
  }

  if (categories_ids) {
    match.categories_ids = { $in: categories_ids };
  }

  if (enabled !== undefined) {
    match.enabled = enabled;
  }

  Task.aggregate([
    {
      $match: match,
    },
    {
      $lookup: {
        from: "categories",
        localField: "categories_ids",
        foreignField: "_id",
        as: "categories",
      },
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
        title: 1,
        description: 1,
        status: 1,
        user: {
          _id: "$user._id",
          name: "$user.name",
          email: "$user.email",
        },
        categories: {
          $map: {
            input: "$categories",
            as: "category",
            in: {
              name: "$$category.name",
              color: "$$category.color",
            },
          },
        },
        enabled: 1,
        createdAt: 1,
        updatedAt: 1,
      },
    },
  ])
    .then((tasks) => {
      return res.status(200).json(tasks);
    })
    .catch((error) => {
      return res.status(400).json({ error: error.message });
    });
};

export default getTasks;
