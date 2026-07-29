import { hashPassword } from "../../helpers/functions.helper";
import User from "../../models/user.model";
import { createUserInput } from "../schema/createUser.schema";

export const createUserService = async (data: createUserInput) => {
  const hashedPassword = await hashPassword(data.password);
  const user = await User.create({
    name: data.name,
    email: data.email,
    avatar: data.avatar,
    password: hashedPassword,
  });
};
