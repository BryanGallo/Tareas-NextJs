const NewTask = () => {
    return (
        <div className="container h-screen flex justify-center mx-auto items-center">
            <form className="bg-slate-700 p-10 text-gray-950 w-2/4">
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
                />
                <label htmlFor="description" className="text-white font-bold">
                    Descripcion
                </label>
                <textarea
                    id="description"
                    placeholder="Descripcion"
                    rows="3"
                    className="p-2 w-full mx-auto rounded-lg"
                />
                <button
                    type="submit"
                    className="p-2 rounded-lg bg-white hover:bg-blue-400 hover:text-white mt-2"
                >
                    Add Task
                </button>
            </form>
        </div>
    );
};

export default NewTask;
