import React, { useState,useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { TaskContext } from '../context/TaskContext'

function TaskDetailsPage() {
  const {taskId} = useParams();

  const {tasks,updateTask} = useContext(TaskContext);

  const task = tasks.find(task => task.id === Number(taskId));

  const [editedTask,setEditedTask] = useState(
    task || {
      title:"",
      description:"",
      type:"",
      priority:"",
      state:"",
      dueDate:"",
      dueTime:""
  });

  useEffect(() => {
    if(task){
      setEditedTask(task);
    }
  }, [task]);

  if(!task){
    return (
      <div style={{padding:"20px"}}>
        <h2>Task Not Found</h2>
      </div>
    );
  }

  const handleSave = () =>{
    updateTask(task.id,editedTask);
    alert("Task Updated Successfully");
  }
  
  return (
    <div style={{padding:"20px"}}>

      <h1>Task Details</h1>

      <label >Title</label>
      <input  type="text" 
              value={editedTask.title}
              onChange={(e)=> 
                setEditedTask({...editedTask,title: e.target.value,})
              } />

      <br />
      <br />
      
      <label >Description</label>
      <textarea value={editedTask.description} 
                onChange={(e)=> 
                  setEditedTask({...editedTask,description:e.target.value,})
                }/>

      <br />
      <br />

      <label >Type</label>
      <input  type="text"
              value={editedTask.type}
              onChange={(e) => 
                setEditedTask({...editedTask,type:e.target.value,})
              }
             />

      <label >Priority</label>
      <select value={editedTask.priority}
              onChange={(e) => 
                setEditedTask({...editedTask,priority:e.target.value,})
              }
      >
        <option value="">Select Priority</option>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>

      <br />
      <br />

      <label >State</label>
      <select value={editedTask.state}
              onChange={(e) => 
                setEditedTask({...editedTask,state:e.target.value,})
              }
      >
        <option value="Todo">Todo</option>
        <option value="In Progress">In Progress</option>
        <option value="Waiting">Waiting</option>
        <option value="Done">Done</option>
      </select>

      <br />
      <br />

      <label >Due Date</label>
      <input  type="date"
              value={editedTask.dueDate}
              onChange={(e) => 
                setEditedTask({...editedTask,dueDate:e.target.value,})
              }
             />

      <br />
      <br />

      <label >Due Time</label>
      <input  type="time"
              value={editedTask.dueTime}
              onChange={(e) => 
                setEditedTask({...editedTask,dueTime:e.target.value,})
              }
             />

      <br />
      <br />


      <button onClick={handleSave}>
        Save Changes
      </button>
    </div>
  )
}

export default TaskDetailsPage;
