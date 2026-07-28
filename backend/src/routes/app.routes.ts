import { Router } from "express";
import { authMiddleware } from "../middlewares/auth.middleware";

import authRoutes from "../auth/routes/auth.routes";
import userRouter from "../user/routes/user.routes";

const router = Router();

router.use("/auth", authRoutes);
router.use(authMiddleware);
router.use("/user", userRouter);

export default router;
