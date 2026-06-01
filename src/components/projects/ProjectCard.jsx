import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProjectContext } from '../../context/ProjectContext';
import { FaEdit,FaTrash } from 'react-icons/fa';
import { IoOpenOutline } from 'react-icons/io5';

function ProjectCard({project}) {
    
    const navigate = useNavigate();

    const {deleteProject,setEditingProject} = useContext(ProjectContext);

    return (
        <div className='project-card'>
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
                <button onClick={()=> navigate(`/project/${project.id}`)}> <IoOpenOutline /> Open Board </button>

                <button onClick={()=> setEditingProject(project)}> <FaEdit/> Edit</button>

                <button onClick={()=> deleteProject(project.id)}> <FaTrash/> Delete</button>
            </div>
        </div>
  );
}

export default ProjectCard;
