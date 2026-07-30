import { formatUser } from "../../helpers/functions.helper";
import User from "../../models/user.model";

export const getUserByIdService = async (id: number) => {
  const user = await User.findByPk(id);
  if (!user) {
    return false;
  }
  return { ...formatUser(user) };
};
