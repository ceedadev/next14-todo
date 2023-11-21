import { db } from "@/db/conn";
import addTaskAction from "./_actions/task";
import AddTask from "@/components/form/add-task";

export default async function Home() {
  const tasks = await db.query.task.findMany();
  return (
    <main>
      <h1>Simple Todo App, Made with NextJS 14, TailwindCSS, Drizzle ORM</h1>
      {tasks.map((task) => (
        <div key={task.id}>
          <p>{task.title}</p>
        </div>
      ))}
      <div>
        <AddTask />
      </div>
    </main>
  );
}
