"use client";

import { deleteTaskAction } from "@/app/_actions/task";

export default function DeleteTaskButton({ id }: { id: number }) {
  function onClick(id: number) {
    deleteTaskAction(id);
  }
  return <button onClick={() => onClick(id)}>Delete</button>;
}
