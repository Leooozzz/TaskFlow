import { Request, RequestHandler } from "express";
import { readJsonWebToken } from "../libs/jwt";
import { getUserByIdAuth } from "../helpers/functions.helper";
import { AppError } from "./app.error";

type TokenPayload = {
  id: number;
};
export const verifyRequest = async (req: Request) => {
  const token = req.cookies.session;
  if (!token) {
    throw new AppError("Forbidden", 403);
  }
  const payload = readJsonWebToken(token);
  if (!payload) {
    return null;
  }
  const userId = (payload as TokenPayload).id;
  const user = await getUserByIdAuth(userId);
  return user;
};

export const authMiddleware: RequestHandler = async (req, res, next) => {
  try {
    const user = await verifyRequest(req);

    if (!user) {
      return next(new AppError("Unauthorized", 401));
    }

    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
};
