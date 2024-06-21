"use client";
import { useRouter } from "next/navigation";
const TaskCard = ({ task }) => {
    const router = useRouter();
    return (
        <div
            className="bg-slate-900 p-3 hover:bg-slate-800 cursor-pointer rounded-md"
            onClick={() => {
                router.push(`/tasks/edit/${task.id}`);
            }}
        >
            <h3 className="text-2xl font-bold">{task.title}</h3>
            <p className="font-semibold italic">{task.description}</p>
            <p className="text-right">{new Date(task.createdAt).toLocaleDateString()}</p>
        </div>
    );
};

export default TaskCard;
