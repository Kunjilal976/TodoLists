import React from 'react';
import './style.css';
    
function Task({ task, index, completeTask, removeTask }) {
        return (
            <div
                className="task"
                style={{ textDecoration: task.completed ? "line-through" : "" }}
            >
                {task.title}
                <button style={{ background: "red" }} onClick={() => removeTask(index)}>x</button>
                <button onClick={() => completeTask(index)}>Complete</button>
            </div>
        );
    }
    
    // [...]


export default Task