import React from 'react';
import './Task.css'

const Task = props => {
    return (
        <div className="taskCard">
            <input type="text"  value={props.task} onChange={props.onTextChange}/>
            <button className="deleteBtn" onClick={props.onDelete}>Delete</button>
        </div>
    );
};


export default Task;