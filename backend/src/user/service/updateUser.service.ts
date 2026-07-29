import User from "../../models/user.model";
import { AppError } from "../../middlewares/app.error";
import { UpdateUserInput } from "../schema/updateUser.schema";
import { formatUser } from "../../helpers/functions.helper";

export const updateUserService = async (id: number, data: UpdateUserInput) => {
  const user = await User.findByPk(id);

  if (!user) {
    throw new AppError("User not found", 404);
  }

  await user.update(data);

  return formatUser(user);
};
