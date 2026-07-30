import { RequestHandler } from "express";
import { AppError } from "../../middlewares/app.error";
import { getUserByIdService } from "../service/getUserById.service";

export const getUserByIdController: RequestHandler = async (req, res, next) => {
  try {
    const userLogged = req.user;
    if (!userLogged) {
      throw new AppError("Unauthorized", 401);
    }
    const { id } = req.params;
    if (!id) {
      throw new AppError("Id is required", 404);
    }
    const parsedId = Number(id);

    const user = await getUserByIdService(parsedId)
    if(!user){
      throw new AppError("User not found",404)
    }
    return res.status(200).json({error:null, data:user})
  } catch (error: unknown) {
    next(error);
  }
};
