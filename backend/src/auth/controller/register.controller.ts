import { RequestHandler } from "express";
import { createToken, formatUser } from "../../helpers/functions.helper";
import { registerSchema } from "../schema/register.schema";
import { registerService } from "../service/register.service";

export const registerController: RequestHandler = async (req, res, next) => {
  try {
    const data = registerSchema.parse(req.body);
    const user = await registerService(data);
    const token = createToken(user);
    const formatedUser = await formatUser(user)
    res.cookie("session", token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      path: "/",
       maxAge: 1000 * 60 * 60 * 24 * 7,
    });
    return res.status(201).json({ error: null, data: formatedUser, token });
  } catch (error:any) {
    console.error(error)
    return res.status(500).json({error:error, message:error.message})
  }
};
