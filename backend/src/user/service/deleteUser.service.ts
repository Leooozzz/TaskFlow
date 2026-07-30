import { AppError } from "../../middlewares/app.error";
import User from "../../models/user.model";

export const deletedUserService = async (id: number) => {
  const deleteUser = await User.destroy({
    where: {
      id,
    },
  });
  if (!deleteUser) {
    throw new AppError("User not found", 404);
  }
  return deleteUser;
};
