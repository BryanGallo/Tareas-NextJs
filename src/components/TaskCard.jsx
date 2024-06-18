import React from "react";

const TaskCard = ({ task }) => {
    console.log(task);
    return (
        <div className="bg-slate-900 p-3 hover:bg-slate-800 cursor-pointer">
            <h3>{task.titulo}</h3>
            <p>{task.description}</p>
        </div>
    );
};

export default TaskCard;
