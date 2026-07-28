import { RequestHandler } from "express";
import { AppError } from "../../middlewares/app.error";
import { meService } from "../service/me.service";

export const meController:RequestHandler = async (req,res,next) => {
  try{
    if(!req.user){
      throw new AppError("Unauthorized",401)
    }
    const userLogged = await meService(req.user.id)
    if(!userLogged){
      throw new AppError("Forbidden",403)
    }
    return res.json({error:null,data:userLogged})
  }catch(error:unknown){
    next(error)
  
  }
}