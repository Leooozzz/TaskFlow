import { RequestHandler } from "express";
import { AppError } from "../../middlewares/app.error";
import { createUserSchema } from "../schema/createUser.schema";
import { createUserService } from "../service/createUser.service";

export const createUser:RequestHandler = async (req,res,next) => {
  try{
    const loggedUser = req.user
    if(!loggedUser){
      throw new AppError("Unauthorized",401)
    }
    const data = createUserSchema.parse(req.body)
    const createdUser = await createUserService(data)
    if(!createUser){
      throw  new AppError("Error to create user",404)
    }
    return res.status(201).json({error:null,data:data})
  }catch (error: unknown) {
    next(error);
  }
}