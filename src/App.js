import React, {useState} from 'react';
import AddTaskForm from "./AddTaskForm/AddTaskForm";
import {nanoid} from "nanoid";
import Task from "./Task/Task";


const App  = () => {
    const [newTask, setNewTask] = useState('');
    const [tasks, setTasks] = useState([
        {task: 'buy milk', id: 1},
        {task: 'buy salt', id: 2}
    ]);

    const addTask = e => {
        e.preventDefault();
        setTasks([...tasks, {task: newTask, id: nanoid()}]);
    };

    const changeText = (e, id) => {
        const tasksCopy = tasks.map(task => {
            if(task.id === id){
                return {
                    ...task,
                    task: e.target.value,
                };
            }
            return task;
        });
        setTasks(tasksCopy);
    };

    const deleteTask = id => {
        const tasksCopy = [...tasks];
        const index = tasks.findIndex(t => t.id === id);
        tasksCopy.splice(index, 1);
        setTasks(tasksCopy);
    };

    return (
        <>
            <AddTaskForm
                onAdd={e => addTask(e)}
                task={newTask}
                onTextChange={e => setNewTask(e.target.value)}
            />
            <>
                {tasks.map(task => (
                    <Task
                        key={task.id}
                        id={task.id}
                        task={task.task}
                        onTextChange={e => changeText(e, task.id)}
                        onDelete={() => deleteTask(task.id)}
                    />
                ))}
            </>
            </>
    );
};


export default App
