import React from 'react'
import Navbar from '../components/common/Navbar';
import Sidebar from '../components/common/Sidebar';
import ProjectCard from '../components/projects/ProjectCard';
import ProjectForm from '../components/projects/ProjectForm';


function ProjectsPage() {
    const dummyProjects = [
        {
            id:1,
            name: "Dashboard App",
            description: "React Project",
            priority: "High",
            status: "Active"
        }
    ];

    return (
        <>
            <Navbar/>



            <div className='layout'>
                <Sidebar/>

                <main className='content'>
                    <h1>Projects</h1>

                    <ProjectForm />

                    {dummyProjects.map(project => (
                        <ProjectCard
                            key={project.id} project={project}/>
                    ))}

                </main> 
            </div>

            
        </>
  )
}

export default ProjectsPage;
