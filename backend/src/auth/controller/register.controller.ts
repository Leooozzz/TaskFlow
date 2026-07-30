import { RequestHandler } from "express";
import { createToken, formatUser } from "../../helpers/functions.helper";
import { registerSchema } from "../schema/register.schema";
import { registerService } from "../service/register.service";
import crypto from "crypto";
import { generateToken } from "../../middlewares/csrf.middleware";

export const registerController: RequestHandler = async (req, res, next) => {
  try {
    const data = registerSchema.parse(req.body);
    const user = await registerService(data);
    const token = createToken(user);
    const formatedUser = await formatUser(user);
    const csrfToken = generateToken(req, res);
    res.cookie("session", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 1000 * 60 * 60 * 24,
    });

    return res.status(201).json({ error: null, data: formatedUser,csrfToken });
  } catch (error) {
    next(error);
  }
};
