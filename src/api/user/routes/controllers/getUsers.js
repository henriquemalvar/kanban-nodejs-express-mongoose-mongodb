import User from "../../../../models/User.js";

const getUsers = (req, res) => {
  const { _id, name, email } = req.body;
  let match = {};

  if (_id) {
    match._id = { $oid: _id };
  }

  if (name) {
    match.name = name;
  }

  if (email) {
    match.email = email;
  }

  User.aggregate([
    {
      $match: match,
    },
    {
      $project: {
        _id: 1,
        name: 1,
        email: 1,
        createdAt: 1,
        updatedAt: 1,
      },
    },
  ])
    .then((users) => {
      return res.status(200).json({
        data: users,
      });
    })
    .catch((error) => {
      return res.status(400).json({
        error: error.message,
      });
    });
};

export default getUsers;
