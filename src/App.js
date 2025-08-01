import React, { useState } from "react";
import AddTaskForm from "./components/AddTaskForm/AddTaskForm";
import { nanoid } from "nanoid";
import Task from "./components/Task/Task";
import ButtonForm from "./components/ButtonForm/ButtonForm";

const App = () => {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  const addTask = (e) => {
    e.preventDefault();

    const newTaskObj = {
      task: newTask,
      id: crypto.randomUUID(),
      completed: false,
    };

    const updatedTasks = [newTaskObj, ...tasks];

    setTasks(updatedTasks);
    setNewTask("");
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
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
        onAdd={(e) => addTask(e)}
        task={newTask}
        onTextChange={(e) => setNewTask(e.target.value)}
      />
      <ButtonForm onFilterChange={setFilter} activeFilter={filter}  />
      <Task
        task={filteredTasks}
        onDelete={deleteTask}
        toggleTask={toggleTask}
      />
    </>
  );
};

export default App;
