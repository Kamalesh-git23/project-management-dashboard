import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { TaskContext } from '../../context/TaskContext';

function TaskCard({task}) {

  const navigate = useNavigate();

  const {deleteTask} = useContext(TaskContext);

  return (
    <div className='task-card'>

        <h4>{task.title}</h4>

        <p>Priority:{task.priority}</p>

        <p>Due:{task.dueDate}</p>

        <div className='task-actions'>
          <button onClick={()=> navigate(`/task/${task.id}`)}>Details</button>
          <button onClick={()=> deleteTask(task.id)}>Delete</button>
        </div>
      
    </div>
  );
}

export default TaskCard;
