import User from "../../../../models/User.js";
import PasswordService from "../../services/PasswordService.js";

const updateUser = async (req, res) => {
  const { id } = req.params;
  const { password, ...rest } = req.body;

  let updateData = { ...rest };

  if (password) {
    const hashedPassword = await PasswordService.encrypt(password);
    updateData.password = hashedPassword;
  }

  User.findByIdAndUpdate(id, updateData, { new: true })
    .then((user) => {
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      user.password = undefined;
      return res.status(200).json({
        data: user,
      });
    })
    .catch((error) => {
      return res.status(400).json({ error: error.message });
    });
};

export default updateUser;