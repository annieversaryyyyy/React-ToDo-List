import React from "react";
import "./AddTaskForm.css";

const AddTaskForm = (props) => {
  return (
    <form className="taskForm" onSubmit={props.onAdd}>
      <input
        className="taskInput"
        type="text"
        value={props.task}
        onChange={props.onTextChange}
        placeholder="Add a new task..."
        required
      />
      <button type="submit" className="addBtn">
        Add
      </button>
    </form>
  );
};

export default AddTaskForm;
