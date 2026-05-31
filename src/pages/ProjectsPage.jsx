import React, { useState,useContext } from 'react';

import Navbar from '../components/common/Navbar';
import Sidebar from '../components/common/Sidebar';

import ProjectCard from '../components/projects/ProjectCard';
import ProjectForm from '../components/projects/ProjectForm';

import { ProjectContext } from '../context/ProjectContext';


function ProjectsPage() {

    const {projects, addProject, updateProject, deleteProject} = useContext(ProjectContext);
    
    const [editingProject,setEditingProject] = useState(null);

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

                    <ProjectForm editingProject={editingProject}
                                setEditingProject={setEditingProject}
                                   />

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
