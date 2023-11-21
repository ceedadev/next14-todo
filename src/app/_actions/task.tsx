"use server";

import { db } from "@/db/conn";
import { task } from "@/db/schema";
import { revalidatePath } from "next/cache";

export default async function addTaskAction(title: string) {
  await db.insert(task).values({ title });
  revalidatePath("/");
}
