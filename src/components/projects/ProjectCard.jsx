import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { ProjectContext } from '../../context/ProjectContext';

import { FaEdit,FaTrash } from 'react-icons/fa';

function ProjectCard({project}) {
    
    const navigate = useNavigate();

    const {deleteProject} = useContext(ProjectContext);

    const handleDeleteProject = (e) => {
        e.stopPropagation();

        const confirmed = window.confirm(
            `Delete project "${project.name}"?\n\nThis action cannot be undone.`);

        if(!confirmed) return;
        
        deleteProject(project.id);
    };

    return (
        <div className='project-card' onClick={()=> navigate(`/project/${project.id}`)}>
            <h3>{project.name}</h3>

            <p>{project.description}</p>

            <p> Type: {project.type} </p>

            <p> Priority: {project.priority} </p>

            <p> Status: {project.status} </p>

            <p> Start Date:{" "}
                {new Date(project.startDate).toLocaleDateString("en-GB")} 
            </p>

            <p> End Date:{" "}
                {new Date(project.endDate).toLocaleDateString("en-GB")} 
            </p>

            <p> Team: {project.teamMembers} </p>

            <div className='card-actions'>

                <button className="icon-btn edit-btn"
                        onClick={(e)=> {
                            e.stopPropagation();
                            navigate(`/projects/edit/${project.id}`);
                        }}
                        title="Edit Project"> 
                    <FaEdit/>
                </button>

                <button className="icon-btn delete-btn"
                        onClick={handleDeleteProject}
                        title="Delete Project"> 
                    <FaTrash/>
                </button>
            </div>
        </div>
  );
}

export default ProjectCard;
