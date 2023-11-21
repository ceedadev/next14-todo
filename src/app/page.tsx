import { db } from "@/db/conn";
import AddTask from "@/components/add-task";
import DeleteTaskButton from "@/components/delete-task";

export default async function Home() {
  const tasks = await db.query.task.findMany();
  return (
    <main>
      <h1>Simple Todo App, Made with NextJS 14, TailwindCSS, Drizzle ORM</h1>
      {tasks.map((task) => (
        <div className="flex flex-row space-x-2" key={task.id}>
          <p>{task.title}</p>
          <DeleteTaskButton id={task.id} />
        </div>
      ))}
      <div>
        <AddTask />
      </div>
    </main>
  );
}
