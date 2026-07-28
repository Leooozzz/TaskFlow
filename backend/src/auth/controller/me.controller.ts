import { RequestHandler } from "express";
import { AppError } from "../../middlewares/app.error";
import { meService } from "../service/me.service";
import { formatUser } from "../../helpers/functions.helper";

export const meController: RequestHandler = async (req, res, next) => {
  try {
    if (!req.user) {
      throw new AppError("Unauthorized", 401);
    }
    const userLogged = await meService(req.user.id);
    if (!userLogged) {
      throw new AppError("Forbidden", 403);
    }
    const formatedUser = formatUser(userLogged)
    return res.json({ error: null, data: formatedUser });
  } catch (error: unknown) {
    next(error);
  }
};
