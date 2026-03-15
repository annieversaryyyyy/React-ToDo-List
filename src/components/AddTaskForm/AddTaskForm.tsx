import "./AddTaskForm.css";
import { AddTaskFormProps } from "../../types/taskItem";

const AddTaskForm = ({ onAdd, task, onTextChange }: AddTaskFormProps) => {
  return (
    <form className="taskForm" onSubmit={onAdd}>
      <input
        className="taskInput"
        type="text"
        value={task}
        onChange={onTextChange}
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
