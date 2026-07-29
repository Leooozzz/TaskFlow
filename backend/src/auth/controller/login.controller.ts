import { RequestHandler } from "express";
import { loginSchema } from "../schema/login.schema";
import { AppError } from "../../middlewares/app.error";
import { loginService } from "../service/login.service";
import { createToken, formatUser } from "../../helpers/functions.helper";
export const loginController: RequestHandler = async (req, res) => {
  try {
    const data = loginSchema.parse(req.body);

    const result = await loginService(data.email, data.password);

    if (!result) {
      throw new AppError("Invalid credentials", 401);
    }

    const token = createToken(result);
    const userFormated = formatUser(result);

    res.cookie("session", token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      path: "/",
      maxAge: 24 * 60 * 60 * 1000,
    });

    return res.status(200).json({
      error: null,
      data: userFormated,
      token,
    });
  } catch (error: any) {
    console.error(error);

    return res.status(500).json({
      error: error,
      message: error.message,
    });
  }
};
