import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { TaskContext } from '../../context/TaskContext';

function TaskCard({task, provided}) {

  const navigate = useNavigate();

  const {deleteTask} = useContext(TaskContext);

  return (
    <div className='task-card'
        ref = {provided?.innerRef}
        {...(provided?.draggableProps || {}) }
        {...(provided?.dragHandleProps || {}) }>

        <h4>{task.title}</h4>

        <p>{task.description}</p>

        <p>Type:{task.type}</p>

        <p>Priority:{task.priority}</p>

        <p>Due Date:{task.dueDate}</p>

        <p>Due Time:{task.dueTime}</p>

        <p>State: {task.state}</p>

        <p>Attachments: {task.attachments?.length || 0}</p>


        <div className='task-actions'>

          <button onClick={()=> navigate(`/task/${task.id}`)}>Details</button>
          
          <button onClick={()=> deleteTask(task.id)}>Delete</button>
        </div>
      
    </div>
  );
}

export default TaskCard;
