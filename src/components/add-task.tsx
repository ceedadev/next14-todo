"use client";
import * as React from "react";
import { addTaskAction } from "@/app/_actions/task";

export default function AddTask() {
  const [title, setTitle] = React.useState("");

  return (
    <form
      className="flex flex-row space-x-4 px-4 "
      onSubmit={(e) => {
        e.preventDefault();
        addTaskAction(title);
        setTitle("");
      }}
    >
      <input
        className="flex flex-grow p-2 border rounded-md outline-blue-600 "
        placeholder="Add new task"
        id="title"
        name="title"
        autoFocus
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        value={title}
      />
      <button
        className="p-2 border rounded-md bg-neutral-600 text-white shadow-sm text-sm px-4 "
        type="submit"
      >
        Submit
      </button>
    </form>
  );
}
