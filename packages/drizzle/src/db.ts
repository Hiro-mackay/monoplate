import type { Pool } from "@neondatabase/serverless";
import { drizzle, type NeonDatabase } from "drizzle-orm/neon-serverless";
import * as schema from "./schemas";

export type ClientOptions = {
  url: string;
};

export type DBClient = NeonDatabase<typeof schema> & {
  $client: Pool;
};

export const db = (options: ClientOptions) =>
  drizzle(options.url, {
    schema,
  });
