import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProjectsPage from '../pages/ProjectsPage';
import KanbanPage from '../pages/KanbanPage';
import TaskDetailsPage from '../pages/TaskDetailsPage';

function AppRoutes() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<ProjectsPage/>}/>
            <Route path='/project/:projectId' element={<KanbanPage/>}/>
            <Route path='/task:taskId' element={<TaskDetailsPagePage/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
