import User from "../../../../models/User.js";
import PasswordService from "../../services/PasswordService.js";

const createUser = async (req, res) => {
  const { email, password } = req.body;

  const userExists = await User.findOne({ email });
  if (userExists) {
    return res.status(400).json({ error: "Email already in use" });
  }

  const hashedPassword = await PasswordService.encrypt(password);

  User.create({ ...req.body, password: hashedPassword })
    .then((user) => {
      user.password = undefined;
      return res.status(201).json(user);
    })
    .catch((error) => {
      return res.status(400).json({ error: error.message });
    });
};

export default createUser;
