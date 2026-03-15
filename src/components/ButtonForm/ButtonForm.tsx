import type { ButtonFormProps } from "../../types/taskItem";
import "./ButtonForm.css";

const ButtonForm = ({ onFilterChange, activeFilter }: ButtonFormProps) => {
  return (
    <div className="button-group">
      <button
        className={activeFilter === "all" ? "filter-btn active" : "filter-btn"}
        onClick={() => onFilterChange("all")}
      >
        All tasks
      </button>
      <button
        className={
          activeFilter === "completed" ? "filter-btn active" : "filter-btn"
        }
        onClick={() => onFilterChange("completed")}
      >
        Completed tasks
      </button>
      <button
        className={
          activeFilter === "active" ? "filter-btn active" : "filter-btn"
        }
        onClick={() => onFilterChange("active")}
      >
        Active tasks
      </button>
    </div>
  );
};

export default ButtonForm;
