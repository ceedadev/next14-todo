import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./src/db/schema.ts",
  driver: "better-sqlite",
  verbose: true,
  dbCredentials: {
    url: "./sqlite.db",
  },
  out: "./drizzle",
});
