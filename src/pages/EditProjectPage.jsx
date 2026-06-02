import React, {useContext,useEffect,useState} from 'react'

import { useNavigate,useParams } from 'react-router-dom';

import Layout from '../components/common/Layout';
import ProjectForm from '../components/projects/ProjectForm';

import { ProjectContext } from '../context/ProjectContext';

import { FaSave } from 'react-icons/fa';

function EditProjectPage() {
    const {projectId} = useParams();

    const navigate = useNavigate();

    const {projects, updateProject} = useContext(ProjectContext);

    const project = projects.find(
        project =>
            project.id === Number(projectId)
    );

    const [formData, setFormData] = useState({
        name:"",
        description:"",
        type:"",
        startDate:"",
        endDate:"",
        priority:"",
        teamMembers:"",
        status:"",
    });

    useEffect(() => {
        if(project){
            setFormData(project);
        }

    }, [project]);

    if(!project){
        return (
            <Layout pageTitle="Edit Project">
                <h2>Project Not Found</h2>
            </Layout>
        );
    }

    const isFormValid = 
        formData.name.trim() &&
        formData.description.trim() && 
        formData.type.trim() &&
        formData.startDate &&
        formData.endDate &&
        formData.priority &&
        formData.teamMembers.trim() &&
        formData.status;

    const handleUpdateProject = () => {
        if (!isFormValid) return;

        updateProject(project.id,formData);

        navigate("/projects");
    };
    

  return (
    <Layout
        pageTitle="Edit Project"
        actionButton={
            <button disabled={!isFormValid} onClick={handleUpdateProject}>
                <FaSave/>
                Update Project
            </button>
        }>

        <ProjectForm formData={formData} setFormData={setFormData}/>

        <div className='form-actions'>
            <button
                className='cancel-btn'
                onClick={()=> navigate("/projects")}>
                Cancel
            </button>

            <button 
                disabled={!isFormValid} 
                onClick={handleUpdateProject}>
                <FaSave/>
                Update Project
            </button>
        </div>
      
    </Layout>
  );
}

export default EditProjectPage;
