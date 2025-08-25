import { auth } from "@workspace/auth/server";
import { type DBClient, db } from "@workspace/drizzle";
import { Hono } from "hono";
import { env } from "hono/adapter";
import { cors } from "hono/cors";
import { logger } from "hono/logger";

type Env = {
  Variables: {
    db: DBClient;
  };
};

const app = new Hono<Env>();

app.use(logger());

// cors
app.use(
  "/api/auth/*",
  cors({
    origin: ["http://localhost:3000"],
    allowHeaders: [
      "X-Custom-Header",
      "Upgrade-Insecure-Requests",
      "Content-Type",
      "Authorization",
    ],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    maxAge: 600,
    credentials: true,
  }),
);

// Instance DB client
app.use(async (c, next) => {
  const { DATABASE_URL } = env<{ DATABASE_URL: string }>(c);
  const dbClient = db({
    url: DATABASE_URL,
  });

  c.set("db", dbClient);
  await next();
});

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.on(["POST", "GET"], "/api/auth/*", async (c) => {
  const db = c.get("db");
  return auth({
    db,
    secret: "0QDIIajHdjrkd8usDvA9zPfwspInCXdW",
    baseUrl: "http://localhost:8787",
  }).handler(c.req.raw);
});

export default app;
