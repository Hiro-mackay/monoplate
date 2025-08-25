import { createAuthClient } from "better-auth/react";

export type AuthClientOptions = {
  baseUrl: string;
};

export const authClient = (options: AuthClientOptions) =>
  createAuthClient({
    baseURL: options.baseUrl,
  });
