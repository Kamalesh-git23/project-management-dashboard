import React, { useContext, useState } from 'react'
import { TaskContext } from '../../context/TaskContext';
import { FaPlus } from 'react-icons/fa';

function TaskForm({ projectId}) {

    const {addTask} = useContext(TaskContext);
    
    const [formData,setFormData] = useState({
        title:"",
        description:"",
        type:"",
        priority:"",
        dueDate:"",
        dueTime:"",
        state:"Todo",
        attachments:[],
    });

    const handleChange = (e) => {
        setFormData({...formData,[e.target.name]:e.target.value});
    };

    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);

        setFormData(prev => ({
            ...prev,
            attachments: files.map( file => ({
                name:file.name,
                size: file.size,
                type: file.type,
            })),
        }));
    };

    const handleSubmit = (e) =>{
        e.preventDefault();

        addTask({
            id:Date.now(),
            projectId:Number(projectId),
            ...formData,
            notes:[],
        });

        setFormData({
            title:"",
            description:"",
            type:"",
            priority:"",
            dueDate:"",
            dueTime:"",
            state:"Todo",
            attachments:[],
        });
    };


    return (
        <form onSubmit={handleSubmit}>
            <input type='text' name="title" placeholder="Task Title" value={formData.title} onChange={handleChange} />

            <textarea name="description" placeholder="Task Description" value={formData.description} onChange={handleChange} />

            <input type='text' name="type" placeholder="Task Type" value={formData.type} onChange={handleChange} />

            <select name="priority" value={formData.priority} onChange={handleChange} >
                <option value="">Select Priority</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
            </select>

            <input type="date" name="dueDate" value={formData.dueDate} onChange={handleChange} />

            <input type="time" name="dueTime" value={formData.dueTime} onChange={handleChange} />

            <input type="file" multiple onChange={handleFileChange} />

            <select name="state" value={formData.state} onChange={handleChange}>
                <option value="Todo">Todo</option>
                <option value="In Progress">In Progress</option>
                <option value="Waiting">Waiting</option>
                <option value="Done">Done</option>
            </select>

            <button type="submit">
                <FaPlus/>
                {" "}Add Task
            </button>

        </form>
  );
}

export default TaskForm;
