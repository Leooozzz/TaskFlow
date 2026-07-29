import z from "zod";

export const createUserSchema = z.object({
  name: z.string().min(2, "The name must be at least 2 characters long"),
  email: z.email(),
  password: z
    .string()
    .min(8, "The password must be at least 8 characters long"),
  avatar: z.string().optional(),
});
export type createUserInput = z.infer<typeof createUserSchema>;