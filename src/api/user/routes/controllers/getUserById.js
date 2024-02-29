import User from "../../../../models/User.js";

const getUserById = async (req, res) => {
  const { id } = req.params;

  User.findById(id)
    .then((user) => {
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      user.password = undefined;
      return res.status(200).json({ data: user });
    })
    .catch((error) => {
      return res.status(400).json({ error: error.message });
    });
};

export default getUserById;
