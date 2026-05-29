import React from 'react'

function ProjectCard({project}) {
  return (
    <div className='project-card'>
        <h3>{project.name}</h3>

        <p>{project.description}</p>

        <p>
            Type:
            {project.type}
        </p>

        <p>
            Priority:
            {project.priority}
        </p>

        <p>
            Status:
            {project.status}
        </p>

        <p>
            Team:
            {project.teamMembers}
        </p>
    </div>
  );
}

export default ProjectCard;
