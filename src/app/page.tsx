import { db } from "@/db/conn";
import AddTask from "@/components/add-task";
import TaskItem from "@/components/task-item";
import GitHubButton from "react-github-btn";
import GhButton from "@/components/github-button";

export default async function Home() {
  const tasks = await db.query.task.findMany();
  return (
    <main className="container mx-auto py-10">
      <div className="flex text-center flex-col mb-10 space-y-2">
        <h1 className="  text-2xl">Simple Todo App</h1>
        <p>
          Made with NextJS 14 App Router, React Server Component, TailwindCSS,
          and Drizzle ORM.
        </p>
        <GhButton />
      </div>
      <div className="mx-auto max-w-md flex flex-col mb-4 pb-4 border-b">
        <AddTask />
      </div>
      <div className="mx-auto max-w-md flex flex-col space-y-4 mb-4 ">
        <h2 className="text-center tracking-wide">
          You have {tasks.length} Todos
        </h2>
        {tasks.map((task, index) => (
          <TaskItem key={index} task={task} />
        ))}
      </div>
    </main>
  );
}
