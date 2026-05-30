import React from 'react';
import { useParams } from 'react-router-dom';
import KanbanColumn from '../components/tasks/KanbanColumn';

function KanbanPage() {
  const {projectId} = useParams();

  const tasks = [
    {
      Id:1,
      title:"Create Navbar",
      priority: "High",
      dueDate: "2026-08-20",
      state:"Todo"
    },

    {
      Id:2,
      title:"Create Sidebar",
      priority: "Medium",
      dueDate: "2026-08-21",
      state:"In Progress"
    },

    {
      Id:3,
      title:"Task API",
      priority: "Low",
      dueDate: "2026-08-22",
      state:"Done"
    }
  ];

  return (
    <div className='kanban-page'>
      <h1>Project:{projectId}</h1>

      <div className='kanban-board'>
        <KanbanColumn
          title="Todo"
          tasks={tasks.filter(task => task.state === "Todo")}/>

        <KanbanColumn
          title="In Progress"
          tasks={tasks.filter(task => task.state === "In Progress")}/>
        
        <KanbanColumn
          title="Waiting"
          tasks={tasks.filter(task => task.state === "Waiting")}/>

        <KanbanColumn
          title="Done"
          tasks={tasks.filter(task => task.state === "Done")}/>

      </div>

    </div>
  );
}

export default KanbanPage;
