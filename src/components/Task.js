import React from "react";

import { CgClose, CgInfo } from 'react-icons/cg'
import "./Task.css"


const Task = ({ task, handleTaskClick, handleTaskRemove }) => {
    return (
        <div className='task-container' style={task.completed ? { borderLeft: '6px solid chartreuse' } : {}}>
            <div className='task-Title' onClick={() => handleTaskClick(task.id)}>
                {task.title}
            </div>
            <div className='buttons-container'>
                <button className='icon-task' onClick={() => handleTaskRemove(task.id)}><CgClose /></button>
                <button className='icon-task'><CgInfo /></button>

            </div>
        </div>
    )
}

export default Task;