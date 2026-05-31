import React from 'react'
import TaskCard from './TaskCard';

function KanbanColumn({title,tasks}) {
  return (
    <div className='kanban-column'>
      <h2>{title}</h2>

        {tasks.map(task =>(
            <TaskCard key={task.id} task={task}/>
            
        ))}

    </div>
  );
}

export default KanbanColumn;
