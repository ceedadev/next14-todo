"use client";
import * as React from "react";
import DeleteTaskButton from "./delete-task";
import { updateTaskAction } from "@/app/_actions/task";

interface TaskItemProps {
  id: number;
  title: string | null;
}

export default function TaskItem({ id, title }: TaskItemProps) {
  const [editState, setEditState] = React.useState(false);
  const [newTitle, setNewTitle] = React.useState(title);

  return (
    <div key={id}>
      <form className="flex flex-row space-x-2">
        {!editState ? (
          <p className="w-[240px]">{title}</p>
        ) : (
          <input
            className="w-[240px]"
            value={newTitle ?? ""}
            onChange={(e) => setNewTitle(e.target.value)}
            autoFocus
          />
        )}
        {editState ? (
          <button
            onClick={(e) => {
              e.preventDefault();
              updateTaskAction(id, newTitle || "");
              setEditState(false);
            }}
          >
            Save
          </button>
        ) : (
          <button
            onClick={(e) => {
              e.preventDefault();
              setEditState(true);
            }}
          >
            Edit
          </button>
        )}
        <DeleteTaskButton id={id} />
      </form>
    </div>
  );
}
