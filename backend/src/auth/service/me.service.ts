import { formatUser, getUserByIdAuth } from "../../helpers/functions.helper"
import { AppError } from "../../middlewares/app.error"

export const meService = async (id:number) => {
  const user = await getUserByIdAuth(id)
  if(!user){
    throw new AppError("Unauthorized",401)
  }
  return {
    ...formatUser(user)
  }
}