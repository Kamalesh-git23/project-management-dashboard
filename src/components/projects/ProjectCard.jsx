import React from 'react'
import { useNavigate } from 'react-router-dom';

function ProjectCard({project,deleteProject,editProject}) {
    
    const navigate = useNavigate();


    return (
        <div className='project-card'>
            <h3>{project.name}</h3>

            <p>{project.description}</p>

            <p> Type: {project.type} </p>

            <p> Priority: {project.priority} </p>

            <p> Status: {project.status} </p>

            <p> Team: {project.teamMembers} </p>

            <div className='card-actions'>
                <button onClick={()=> navigate(`/project/${project.id}`)}> Open Board </button>

                <button onClick={()=> editProject(project)}> Edit</button>

                <button onClick={()=> deleteProject(project.id)}> Delete</button>
            </div>
        </div>
  );
}

export default ProjectCard;
