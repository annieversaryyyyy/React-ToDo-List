import React from 'react';
import './AddTaskForm.css'

const AddTaskForm = (props) =>  {

        return (
            <form className='taskForm' onSubmit={props.onAdd}>
                <input className="addInput" type="text" value={props.task}  onChange={props.onTextChange} placeholder="Add New Index"  />
                <button type="submit" className="addBtn">Add</button>
            </form>
        );
};

export default AddTaskForm;