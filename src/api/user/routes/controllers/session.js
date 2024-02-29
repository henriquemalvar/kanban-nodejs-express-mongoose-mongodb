import User from "../../../../models/User.js";
import PasswordService from "../../services/PasswordService.js";
import jwt from "jsonwebtoken";
import "dotenv/config";
const createSession = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({ error: "Email not found" });
  }

  const passwordMatch = await PasswordService.compare(password, user.password);
  if (!passwordMatch) {
    return res.status(400).json({ error: "Incorrect password" });
  }

  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);

  user.password = undefined;
  return res.status(200).json({ token, user });
};

export default createSession;
