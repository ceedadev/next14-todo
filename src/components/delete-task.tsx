"use client";

import { deleteTaskAction } from "@/app/_actions/task";

export default function DeleteTaskButton({ id }: { id: number }) {
  return (
    <button
      className="hover:font-semibold"
      onClick={() => deleteTaskAction(id)}
    >
      Delete
    </button>
  );
}
