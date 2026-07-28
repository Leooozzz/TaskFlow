import { RequestHandler } from "express";
import { AppError } from "../../middlewares/app.error";
import { updateUserService } from "../service/updateUser.service";
import { updateUserSchema } from "../schema/updateUser.schema";

export const updateUserController: RequestHandler = async (req, res, next) => {
  try {
    const loggedUser = req.user;
    if (!loggedUser) {
      throw new AppError("Unauthorized", 401);
    }
    const { id } = req.params;
    if (!id) {
      throw new AppError("Id is required", 404);
    }
    const parsedId = Number(id);
    const data = updateUserSchema.parse(req.body);
    const user = await updateUserService(parsedId, data);
    if (!user) {
      throw new AppError("Error to update user", 404);
    }
    return res.status(201).json({ error: null, data: user });
  } catch (error: unknown) {
    next(error);
  }
};
