import React from 'react'
import { useState } from 'react';
import Navbar from '../components/common/Navbar';
import Sidebar from '../components/common/Sidebar';
import ProjectCard from '../components/projects/ProjectCard';
import ProjectForm from '../components/projects/ProjectForm';


function ProjectsPage() {
    const [projects,setProjects] = useState([]);
    const [editingProject,setEditingProject] = useState(null);


    const addProject = (project)=>{
        setProjects([...projects,project]);
    };

    const deleteProject = (id) => {
        setProjects(
            projects.filter(
                project => project.id !==id
            )
        );
    };

    const editProject = (project) => {
        setEditingProject(project);
    };
    
    


    return (
        <>
            <Navbar/>

            <div className='layout'>
                <Sidebar/>

                <main className='content'>
                    <h1>Projects</h1>

                    <ProjectForm addProject={addProject}
                                editingProject={editingProject}
                                setEditingProject={setEditingProject}
                                setProjects={setProjects}
                                projects={projects}   />

                    {projects.map(project => (
                        <ProjectCard
                            key={project.id} 
                            project={project}
                            deleteProject={deleteProject}
                            editProject={editProject}/>
                    ))}

                </main> 
            </div>

            
        </>
  )
}

export default ProjectsPage;
