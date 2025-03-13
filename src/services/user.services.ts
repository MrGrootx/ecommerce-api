import UserModal from "../db/Schemas/user/user.Schema";
import bcrypt from "bcryptjs";
const findUserByEmail = async (email: string) => {
  const user = UserModal.findOne({ email });
  return user;
};

const createUser = async (email: string, password: any, role: string) => {
  const hashPassword = await bcrypt.hash(password, 10);
  const user = new UserModal({
    email,
    password: hashPassword,
    role,
  });
  await user.save();
};

const ValidatePassword = async (password: string, userPassword: string) => {
  const isValid = await bcrypt.compare(password, userPassword);
  return isValid;
};

export const userServices = {
  findUserByEmail,
  createUser,
  ValidatePassword,
};
