import React, { useState } from "react";
import AddTaskForm from "./AddTaskForm/AddTaskForm";
import { nanoid } from "nanoid";
import Task from "./Task/Task";

const App = () => {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState([]);

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

  console.log(tasks);

  return (
    <>
      <AddTaskForm
        onAdd={(e) => addTask(e)}
        task={newTask}
        onTextChange={(e) => setNewTask(e.target.value)}
      />

      <Task task={tasks} onDelete={deleteTask} toggleTask={toggleTask} />
    </>
  );
};

export default App;
