import { Router } from "express";
import { loginController } from "../controller/login.controller";
import { registerController } from "../controller/register.controller";
import { authMiddleware } from "../../middlewares/auth.middleware";
import { meController } from "../controller/me.controller";
import { logoutController } from "../controller/logout.controller";

const router = Router();

router.post("/login", loginController);
router.post("/register", registerController);

router.get("/me", authMiddleware, meController);
router.post("/logout", authMiddleware, logoutController);

export default router;
