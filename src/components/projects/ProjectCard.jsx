import React from 'react'

function ProjectCard({project}) {
  return (
    <div className='project-card'>
        <h3>{project.name}</h3>

        <p>{project.description}</p>

        <p>
            priority:
            {project.priority}
        </p>

        <p>
            status:
            {project.status}
        </p>
    </div>
  );
}

export default ProjectCard;
