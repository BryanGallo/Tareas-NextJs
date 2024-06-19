"use client";
import { useRouter } from "next/navigation";
const TaskCard = ({ task }) => {
    const router = useRouter();
    return (
        <div
            className="bg-slate-900 p-3 hover:bg-slate-800 cursor-pointer"
            onClick={() => {
                router.push(`/tasks/edit/${task.id}`);
            }}
        >
            <h3>{task.titulo}</h3>
            <p>{task.description}</p>
            <p>{new Date(task.createdAt).toLocaleDateString()}</p>
        </div>
    );
};

export default TaskCard;
