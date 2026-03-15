import { useState } from "react";
import AddTaskForm from "./components/AddTaskForm/AddTaskForm";
import ButtonForm from "./components/ButtonForm/ButtonForm";
import Task from "./components/Task/Task";
import type { TaskItem } from "./types/taskItem";
import type { FilterType } from "./types/taskItem";

const App = () => {
  const [newTask, setNewTask] = useState<string>("");
  const [tasks, setTasks] = useState<TaskItem[]>([]);
  const [filter, setFilter] = useState<FilterType>("all");

  const addTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTaskObj: TaskItem = {
      task: newTask,
      id: crypto.randomUUID(),
      completed: false,
    };

    const updatedTasks = [newTaskObj, ...tasks];

    setTasks(updatedTasks);
    setNewTask("");
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleTask = (id: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "active") return !task.completed;
    return true;
  });

  return (
    <>
      <AddTaskForm
        onAdd={(e: React.FormEvent<HTMLFormElement>) => addTask(e)}
        task={newTask}
        onTextChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setNewTask(e.target.value)
        }
      />
      <ButtonForm onFilterChange={setFilter} activeFilter={filter} />
      <Task
        task={filteredTasks}
        onDelete={deleteTask}
        toggleTask={toggleTask}
      />
    </>
  );
};

export default App;
