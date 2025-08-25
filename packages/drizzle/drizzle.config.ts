import "dotenv/config";
import { defineConfig } from "drizzle-kit";
export default defineConfig({
  out: "./drizzle",
  schema: "./src/schemas/index.ts",
  dialect: "postgresql",
  breakpoints: false,
  strict: true,
});
