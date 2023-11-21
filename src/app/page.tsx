import { db } from "@/db/conn";
import AddTask from "@/components/add-task";
import DeleteTaskButton from "@/components/delete-task";
import TaskItem from "@/components/task-item";

export default async function Home() {
  const tasks = await db.query.task.findMany();
  return (
    <main>
      <h1>Simple Todo App, Made with NextJS 14, TailwindCSS, Drizzle ORM</h1>
      {tasks.map((task) => (
        <div key={task.id}>
          <TaskItem id={task.id} title={task.title} />
        </div>
      ))}
      <div>
        <AddTask />
      </div>
    </main>
  );
}
