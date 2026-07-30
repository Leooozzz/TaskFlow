import { Router } from "express";
import { getUsers } from "../controller/getUsers.controller";
import { getUserByIdController } from "../controller/getUserById.controller";
import { createUser } from "../controller/createUser.controller";
import { deleteUserController } from "../controller/deleteUser.controller";
import { updateUserController } from "../controller/updateUser.controller";

const router = Router()

router.get("/",getUsers)
router.get("/:id",getUserByIdController)
router.post("/",createUser)
router.put("/:id",updateUserController)
router.delete("/:id",deleteUserController)

export default router;