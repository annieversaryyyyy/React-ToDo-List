import React from "react";
import "./Task.css";

const Task = ({ task, onDelete }) => {
  return (
    <ul className="taskCard">
      {task.map((item) => (
        <li className="list-group-item" data-id={item.id} key={item.id}>
          <span>{item.task}</span>
          <button className="deleteButton" onClick={() => onDelete(item.id)}>
            ×
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Task;
