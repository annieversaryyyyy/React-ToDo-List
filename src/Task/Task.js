import React from "react";
import "./Task.css";

const Task = ({ task, onDelete, toggleTask }) => {
  return (
    <ul className="taskCard">
      {task.map((item) => (
        <li className="list-group-item" data-id={item.id} key={item.id}>
          <div className="task-left">
            <input
              type="checkbox"
              checked={item.completed}
              onChange={() => toggleTask(item.id)}
              className="custom-checkbox"
            />
            <span className={item.completed ? "task-text completed" : "task-text"}>
              {item.task}
            </span>
          </div>
          <button className="deleteButton" onClick={() => onDelete(item.id)}>
            ×
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Task;
