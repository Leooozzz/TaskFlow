import { RequestHandler } from "express";

export const logoutController: RequestHandler = async (req, res, next) => {
  try {
    res.clearCookie("session", {
      secure: false,
      sameSite: "lax",
      path: "/",
    });
    return res.status(200).json({ error: null, message: "Logout Success" });
  } catch (error: unknown) {
    next(error);
  }
};
