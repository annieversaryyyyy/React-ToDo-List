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

  return (
    <>
      <AddTaskForm
        onAdd={(e) => addTask(e)}
        task={newTask}
        onTextChange={(e) => setNewTask(e.target.value)}
      />

      <Task task={tasks} onDelete={deleteTask} />
    </>
  );
};

export default App;
