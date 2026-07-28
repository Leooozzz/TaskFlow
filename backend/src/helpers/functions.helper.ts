import { createJsonWebToken } from "../libs/jwt";
import { AppError } from "../middlewares/app.error";
import User from "../models/user.model";
import bcrypt from "bcrypt";

export const getUserByIdAuth = async (id: number) => {
  const user = await User.findByPk(id);
  if (!user) {
    throw new Error("User not found");
  }
  return user;
};

export const createToken = (user: User) => {
  return createJsonWebToken({ id: user.id });
};

export const verifyPassword = async (
  password: string,
  hashPassword: string,
) => {
  return bcrypt.compare(password, hashPassword);
};

export const formatUser = (user: User) => {
  const { password, ...userWithoutPassword } = user;
  if (userWithoutPassword.avatar) {
    userWithoutPassword.avatar = `${process.env.BASE_URL}/static/avatars/${userWithoutPassword}`;
  }
  const { id, name, email, avatar } = userWithoutPassword;
  return { id, name, email, avatar };
};

export const getUserByEmail = async (email: string) => {
  const result = await User.findOne({
    where: {
      email: email.toLowerCase(),
    },
  });

  return result;
};
export const hashPassword = (password: string) => {
  return bcrypt.hash(password, 10);
};
