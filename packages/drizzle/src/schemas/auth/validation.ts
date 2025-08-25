import z from "zod";
import { IdSchema } from "../../utils/shared-validation";

export const UserSchema = z.object({
  id: IdSchema,
  name: z.string().min(1).max(255),
  email: z.email(),
  password: z.string().min(8).max(255),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type UserSchema = z.infer<typeof UserSchema>;

export const CreateUserInput = z.object({
  name: z.string().min(1).max(255),
  email: z.email(),
  password: z.string().min(8).max(255),
});

export type CreateUserInput = z.infer<typeof CreateUserInput>;

export const UpdateUserInput = z.object({
  id: IdSchema,
  name: z.string().min(1).max(255),
  email: z.email(),
  password: z.string().min(8).max(255),
});

export type UpdateUserInput = z.infer<typeof UpdateUserInput>;

export const DeleteUserInput = z.object({
  id: IdSchema,
});

export type DeleteUserInput = z.infer<typeof DeleteUserInput>;
