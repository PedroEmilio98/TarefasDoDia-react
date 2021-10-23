import React from "react";
import Task from "./Task";

const Tasks = ({ tasks, handleTaskClick, handleTaskRemove }) => {
    console.log(tasks)
    return (
        <>
            {tasks.map(task => (
                <Task key={task.id} task={task} handleTaskClick={handleTaskClick} handleTaskRemove={handleTaskRemove} />
            ))}
        </>
    )
}
export default Tasks;