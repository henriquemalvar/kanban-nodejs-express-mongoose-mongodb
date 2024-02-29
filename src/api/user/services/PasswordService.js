import bcrypt from "bcryptjs";
import dotenv from "dotenv";

dotenv.config();

class PasswordService {
  async encrypt(password) {
    const salt = await bcrypt.genSalt(Number(process.env.BCRYPT_SALT));
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
  }

  async compare(password, hashedPassword) {
    const match = await bcrypt.compare(password, hashedPassword);
    return match;
  }
}

export default new PasswordService();
