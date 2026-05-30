import React from 'react';
import { useParams } from 'react-router-dom';
import KanbanColumn from '../components/tasks/KanbanColumn';
import TaskForm from '../components/tasks/TaskForm';
import { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

function KanbanPage() {
  const {projectId} = useParams();

  const {tasks} = useContext(TaskContext);

  const projectTasks = tasks.filter(task =>
    task.projectId === Number(projectId)
  );

  return (
    <div className='kanban-page'>
      <h1>Project:{projectId}</h1>

      <TaskForm projectId={projectId} />

      <div className='kanban-board'>
        <KanbanColumn
          title="Todo"
          tasks={projectTasks.filter(task => task.state === "Todo")}/>

        <KanbanColumn
          title="In Progress"
          tasks={projectTasks.filter(task => task.state === "In Progress")}/>
        
        <KanbanColumn
          title="Waiting"
          tasks={projectTasks.filter(task => task.state === "Waiting")}/>

        <KanbanColumn
          title="Done"
          tasks={projectTasks.filter(task => task.state === "Done")}/>

      </div>

    </div>
  );
}

export default KanbanPage;
