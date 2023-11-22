import { sql } from "drizzle-orm";
import { text, integer, sqliteTable } from "drizzle-orm/sqlite-core";

export const task = sqliteTable("tasks", {
  id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  title: text("title"),
  createdAt: text("created_at").notNull(),
  editedAt: text("edited_at"),
});

export type SelectTask = typeof task.$inferSelect;
