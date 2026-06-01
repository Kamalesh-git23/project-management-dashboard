import React, { useState,useContext } from 'react';

import Layout from '../components/common/Layout';

import ProjectCard from '../components/projects/ProjectCard';
import ProjectForm from '../components/projects/ProjectForm';

import { ProjectContext } from '../context/ProjectContext';


function ProjectsPage() {

    const {projects} = useContext(ProjectContext);
    
    return (

        <Layout>
            <h1>Projects</h1>

                <ProjectForm />

                <div className='projects-grid'>
                    {projects.map(project => (
                        <ProjectCard key={project.id}  project={project}/>
                    ))}
                </div>
                
        </Layout>
                
  );
}

export default ProjectsPage;