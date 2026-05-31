import React, { useContext, useState } from 'react'
import { TaskContext } from '../../context/TaskContext';

function TaskForm({ projectId}) {
    const {addTask} = useContext(TaskContext);
    const [formData,setFormData] = useState({
        title:"",
        description:"",
        type:"",
        priority:"",
        dueDate:"",
        dueTime:"",
        state:"Todo"
    });

    const handleChange = (e) => {
        setFormData({...formData,[e.target.name]:e.target.value});
    };

    const handleSubmit = (e) =>{
        e.preventDefault();

        addTask({
            id:Date.now(),
            projectId:Number(projectId),
            ...formData,
            attachments:[],
            notes:[]
        });

        setFormData({
            title:"",
            description:"",
            type:"",
            priority:"",
            dueDate:"",
            dueTime:"",
            state:"Todo"
        });
    };


    return (
    <form onSubmit={handleSubmit}>
        <input name="title" placeholder="Task Title" value={formData.title} onChange={handleChange} />

        <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} />

        <input name="type" placeholder="Type" value={formData.type} onChange={handleChange} />

        <select name="priority" value={formData.priority} onChange={handleChange} >
            <option value="">Priority</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
        </select>

        <input type="date" name="dueDate" value={formData.dueDate} onChange={handleChange} />
        <input type="time" name="dueTime" value={formData.dueTime} onChange={handleChange} />

        <button type="submit">Add Task</button>

    </form>
  );
}

export default TaskForm;
