"use client";
import * as React from "react";
import DeleteTaskButton from "./delete-task";
import { updateTaskAction } from "@/app/_actions/task";
import { type SelectTask } from "@/db/schema";

interface TaskItemProps {
  task: SelectTask;
}

export default function TaskItem({ task }: TaskItemProps) {
  const [editState, setEditState] = React.useState(false);
  const [newTitle, setNewTitle] = React.useState(task.title);

  return (
    <div className="border rounded-md p-4  shadow-md">
      <form className="flex flex-row space-x-2">
        <div className="flex flex-col flex-grow">
          {!editState ? (
            <p className="flex flex-grow p-1">{task.title}</p>
          ) : (
            <input
              className="flex flex-grow p-1 outline-blue-600"
              value={newTitle ?? ""}
              onChange={(e) => setNewTitle(e.target.value)}
              autoFocus
            />
          )}
          <p className="text-xs italic text-gray-600 font-light">
            created at
            <span className="not-italic"> {task.createdAt} UTC</span>
          </p>
          {task.editedAt && (
            <p className="text-xs italic text-gray-600 font-light">
              edited at
              <span className="not-italic"> {task.editedAt} UTC</span>
            </p>
          )}
        </div>
        {editState ? (
          <button
            className="hover:font-semibold"
            onClick={(e) => {
              e.preventDefault();
              updateTaskAction(task.id, newTitle || "");
              setEditState(false);
            }}
          >
            Save
          </button>
        ) : (
          <button
            className="hover:font-semibold"
            onClick={(e) => {
              e.preventDefault();
              setEditState(true);
            }}
          >
            Edit
          </button>
        )}
        <DeleteTaskButton id={task.id} />
      </form>
    </div>
  );
}
