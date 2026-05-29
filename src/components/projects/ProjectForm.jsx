import React from 'react'
import { useState,useEffect } from 'react';

function ProjectForm({addProject,editingProject,setEditingProject, projects, setProjects}) {
    const [formData, setFormData] = useState({
        name:"",
        description:"",
        type:"",
        startDate:"",
        endDate:"",
        priority:"",
        teamMembers:"",
        status:""
    });

    useEffect(()=>{
        if(editingProject){
            setFormData(editingProject);
        }
    },[editingProject]);

    const handleChange = (e)=>{
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        });
    };

    const handleSubmit = (e)=>{
        e.preventDefault();

        if(editingProject){
            const updatedProjects = projects.map(project => 
                project.id === editingProject.id ? formData:project);

            setProjects(updatedProjects);
            setEditingProject(null);
        }else{
            addProject({
                id:Date.now(),
                ...formData
            });
        }

        setFormData({
            name:"",
            description:"",
            type:"",
            startDate:"",
            endDate:"",
            priority:"",
            teamMembers:"",
            status:""
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name='name' placeholder='Project Name' value={formData.name} onChange={handleChange} />

            <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} />

            <input type="text" name='type' placeholder='Type' value={formData.type} onChange={handleChange} />

            <input type="date" name='startDate' value={formData.startDate} onChange={handleChange} />

            <input type="date" name='endDate' value={formData.endDate} onChange={handleChange} />

            <select name="priority" value={formData.priority} onChange={handleChange}>
                <option value="">Priority</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
            </select>

            <input type="text" name='teamMembers' placeholder='Team Members' value={formData.teamMembers} onChange={handleChange} />

            <select name="status" value={formData.status} onChange={handleChange}>
                <option value="">Status</option>
                <option value="Active">Active</option>
                <option value="Completed">Completed</option>
                <option value="On Hold">On Hold</option>
            </select>

            <button type='submit'>
                {
                    editingProject ? "Update Project":"Add Project"
                }
            </button>
        </form>
  );
}

export default ProjectForm;
