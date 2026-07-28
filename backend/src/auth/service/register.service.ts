import { getUserByEmail, hashPassword } from "../../helpers/functions.helper";
import { AppError } from "../../middlewares/app.error";
import User from "../../models/user.model";
import { registerInput } from "../schema/register.schema";

export const registerService = async (data: registerInput) => {
  const existingUser = await getUserByEmail(data.email);

  if (existingUser) {
    throw new AppError("This email is already in use", 400);
  }

  const hashedPassword = await hashPassword(data.password);

  const user = await User.create({
    name: data.name,
    email: data.email.toLowerCase(),
    password: hashedPassword,
    avatar: data.avatar,
  });

  return user;
};