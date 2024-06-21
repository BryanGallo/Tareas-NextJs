"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const NewTask = ({ params }) => {
    const [id, setId] = useState();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const router = useRouter();

    useEffect(() => {
        if (params.id) {
            const fetchTasks = async () => {
                const res = await fetch(`/api/tasks/${params.id}`);
                const data = await res.json();
                if (data) {
                    console.log(data);
                    setId(data.id);
                    setTitle(data.title);
                    setDescription(data.description);
                    return;
                } else {
                    router.push(`/`);
                }
            };
            fetchTasks();
        }
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if ([title, description].includes("")) {
            return alert("Todos los campos son obligatorios");
        }
        if (params.id) {
            const res = await fetch(`/api/tasks/${params.id}`, {
                method: "PUT",
                body: JSON.stringify({ title, description }),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const data = await res.json();
            console.log(data);
        } else {
            const res = await fetch("/api/tasks", {
                method: "POST",
                body: JSON.stringify({ title, description }),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const data = await res.json();
            console.log(data);
        }
        router.push(`/`);
        router.refresh();
    };

    const deleteTask = async () => {
        const confirmDelete = confirm(
            "Esta seguro de que desea eliminar la Tarea"
        );
        if (!confirmDelete) return;
        const res = await fetch(`/api/tasks/${params.id}`, {
            method: "DELETE",
        });
        const data = await res.json();
        console.log(data);
        router.push(`/`);
        router.refresh();
    };

    return (
        <div className="container h-[calc(100vh-7rem)] flex justify-center mx-auto items-center">
            <form
                onSubmit={handleSubmit}
                className="bg-slate-700 p-10 text-gray-950 w-2/4 rounded-md"
            >
                <h2 className="text-3xl text-center mb-4 font-bold text-white ">
                    Add Task
                </h2>
                <label htmlFor="title" className="text-white font-bold">
                    Titulo
                </label>
                <input
                    id="title"
                    type="text"
                    placeholder="Titulo Tarea"
                    className=" w-full mb-4 p-2 rounded-lg"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label htmlFor="description" className="text-white font-bold">
                    Descripcion
                </label>
                <textarea
                    id="description"
                    placeholder="Descripcion"
                    rows="3"
                    className="p-2 w-full mx-auto rounded-lg"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <div className="flex justify-center gap-3">
                    <button
                        type="submit"
                        className="p-2 rounded-lg bg-blue-300 hover:bg-blue-500 hover:text-white mt-2"
                    >
                        {id ? "Editar Tarea" : "Crear Tarea"}
                    </button>
                    {id && (
                        <button
                            type="button"
                            className="p-2 rounded-lg bg-red-300 hover:bg-red-500 hover:text-white mt-2"
                            onClick={deleteTask}
                        >
                            Eliminar Tarea
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
};

export default NewTask;
