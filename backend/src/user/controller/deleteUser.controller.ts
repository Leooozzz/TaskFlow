import { RequestHandler } from "express";
import { AppError } from "../../middlewares/app.error";
import { deletedUserService } from "../service/deleteUser.service";

export const deleteUserController: RequestHandler = async (req, res, next) => {
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
    const deleteUser = await deletedUserService(parsedId);
    if (!deleteUser) {
      throw new AppError("Error to delete User", 404);
    }
    return res.status(204).json({ error: null, data: null });
  } catch (error: unknown) {
    next(error);
  }
};
