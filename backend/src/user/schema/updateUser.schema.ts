import { z } from "zod";

export const updateUserSchema = z
  .object({
    name: z.string().min(3).optional(),
    avatar: z.string().url().optional(),
  })
  .refine((data) => data.name !== undefined || data.avatar !== undefined, {
    message: "At least one field (name or avatar) must be provided.",
  });

export type UpdateUserInput = z.infer<typeof updateUserSchema>;
