import { z } from "zod";
import { PRIMARY_ID_LENGTH } from "./shared-consts";

export const IdSchema = z.string().length(PRIMARY_ID_LENGTH);

export const PaginationSchema = z.object({
  page: z.number().int().positive().default(1),
  limit: z.number().int().positive().default(10),
});

export type PaginationSchema = z.infer<typeof PaginationSchema>;
