import React from 'react'

function TaskCard({task}) {
  return (
    <div className='task-card'>

        <h4>{task.title}</h4>

        <p>Priority:{task.priority}</p>

        <p>Due:{task.dueDate}</p>
      
    </div>
  );
}

export default TaskCard;
