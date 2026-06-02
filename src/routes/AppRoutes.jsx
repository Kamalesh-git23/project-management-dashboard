import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProjectsPage from '../pages/ProjectsPage';
import CreateProjectPage from '../pages/CreateProjectPage';
import EditProjectPage from '../pages/EditProjectPage';
import KanbanPage from '../pages/KanbanPage';
import TaskDetailsPage from '../pages/TaskDetailsPage';

function AppRoutes() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/projects' element={<ProjectsPage/>}/>
            <Route path='/projects/create' element={<CreateProjectPage/>}/>
            <Route path='/projects/edit/:projectId' element={<EditProjectPage/>}/>
            <Route path='/project/:projectId' element={<KanbanPage/>}/>
            <Route path='/task/:taskId' element={<TaskDetailsPage/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
