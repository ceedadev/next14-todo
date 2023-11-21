"use client";
import * as React from "react";
import { addTaskAction } from "@/app/_actions/task";

export default function AddTask() {
  const [title, setTitle] = React.useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        addTaskAction(title);
        setTitle("");
      }}
    >
      <input
        placeholder="Add new task"
        id="title"
        name="title"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        value={title}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
