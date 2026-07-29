import z from "zod";

export const registerSchema = z.object({
  name:z.string().min(2,"Name is required").max(255),
  email: z.email(),
  password: z.string().min(8,"The password must be at least 8 characters long."),
  avatar:z.string().optional()
}) 
export type registerInput = z.infer<typeof registerSchema>;