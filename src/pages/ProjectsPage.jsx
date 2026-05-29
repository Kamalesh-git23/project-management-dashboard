import React from 'react'
import { useState } from 'react';
import Navbar from '../components/common/Navbar';
import Sidebar from '../components/common/Sidebar';
import ProjectCard from '../components/projects/ProjectCard';
import ProjectForm from '../components/projects/ProjectForm';


function ProjectsPage() {
    const [projects,setProjects] = useState([]);

    const addProject = (project)=>{
        setProjects([...projects,project]);
    };
    

    return (
        <>
            <Navbar/>



            <div className='layout'>
                <Sidebar/>

                <main className='content'>
                    <h1>Projects</h1>

                    <ProjectForm addProject={addProject}/>

                    {projects.map(project => (
                        <ProjectCard
                            key={project.id} project={project}/>
                    ))}

                </main> 
            </div>

            
        </>
  )
}

export default ProjectsPage;
