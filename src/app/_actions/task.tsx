"use server";

import { db } from "@/db/conn";
import { task } from "@/db/schema";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export async function addTaskAction(title: string) {
  await db.insert(task).values({ title, createdAt: new Date().toISOString() });
  revalidatePath("/");
}

export async function deleteTaskAction(id: number) {
  await db.delete(task).where(eq(task.id, id));
  revalidatePath("/");
}

export async function updateTaskAction(id: number, title: string) {
  await db
    .update(task)
    .set({ title, editedAt: new Date().toISOString() })
    .where(eq(task.id, id));
  revalidatePath("/");
}
