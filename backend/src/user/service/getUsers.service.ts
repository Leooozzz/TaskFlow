import { formatUser } from "../../helpers/functions.helper";
import User from "../../models/user.model";

export const getAllUsers = async () => {
  const users = await User.findAll();

  return {
    data: users.map((user) => formatUser(user)),
  };
};
