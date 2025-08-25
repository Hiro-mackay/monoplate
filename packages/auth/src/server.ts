import type { DBClient } from "@workspace/drizzle";
import * as schema from "@workspace/drizzle/schemas";

import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";

export type AuthServerOptions = {
  db: DBClient;
  secret: string;
  baseUrl: string;
};

export const auth = (options: AuthServerOptions) =>
  betterAuth({
    database: drizzleAdapter(options.db, {
      provider: "pg",
      schema,
    }),
    advanced: {
      database: {
        generateId: false,
      },
    },
    emailAndPassword: {
      enabled: true,
      hashPassword: true,
    },
    baseURL: options.baseUrl,
    secret: options.secret,
    trustedOrigins: ["http://localhost:3000"],
    session: {
      expiresIn: 60 * 60 * 24 * 30, // 30 days
    },
  });
