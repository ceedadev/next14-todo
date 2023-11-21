import { db } from "@/db/conn";

export default async function Home() {
  const tasks = await db.query.task.findMany();
  return (
    <main>
      <h1>Simple Todo App, Made with NextJS 14, TailwindCSS, Drizzle ORM</h1>
      {tasks.map((task) => (
        <p>{task.title}</p>
      ))}
    </main>
  );
}
