import { prisma } from "@/app/libs/prisma";
import TaskCard from "@/components/TaskCard";
async function loadTask() {
    //obteniendo de la base de datos // debemos importar primas
    const res = await prisma.task.findMany();
    return res;
    //Peticion  HTTP /api/tasks
    // const res = await fetch("http://localhost:3000/api/tasks");
    // const data = await res.json();
    // console.log('aca');
    // console.log(data);
    // return data
}

export default async function Home() {
    const tasks = await loadTask();
    console.log(tasks);
    return (
        <main className="container mx-auto">
            <h1 className="text-center font-bold text-2xl">Tareas</h1>
            
            <section className="grid grid-cols-3 gap-3">
                {tasks.map((task) => (
                    <TaskCard key={task.id} task={task} />
                ))}
            </section>
        </main>
    );
}
