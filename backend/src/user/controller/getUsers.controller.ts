import { RequestHandler } from "express";
import { AppError } from "../../middlewares/app.error";
import { getAllUsers } from "../service/getUsers.service";

export const getUsers:RequestHandler = async (req,res,next) => {
  try{
    const userLogged = req.user
    if(!userLogged){
      throw new AppError("Unauhtorized",401)
    }
    const userList =  await getAllUsers()
    if(!userList){
      throw new AppError("Error to list users",404)
    }
    return res.status(200).json({error:null,data:userList})

  }catch(error:unknown){
    next(error)
  }
}