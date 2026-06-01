import React, { useState, useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { TaskContext } from '../context/TaskContext'
import Layout from '../components/common/Layout';
import { useNavigate } from 'react-router-dom';

function TaskDetailsPage() {
  const {taskId} = useParams();

  const navigate = useNavigate();
  
  const {tasks,updateTask} = useContext(TaskContext);

  const task = tasks.find(task => task.id === Number(taskId));
  
  const [note,setNote] = useState("");

  const [editedTask,setEditedTask] = useState({
      title:"",
      description:"",
      type:"",
      priority:"",
      state:"",
      dueDate:"",
      dueTime:"",
      notes:[],
      attachments:[]
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

  const handleChange = (e) => {
    const {name,value} = e.target;

    setEditedTask((prev) => ({
      ...prev,[name]:value,
    }));
  };

  const addNote = () =>{
    if(!note.trim()) return;

    setEditedTask((prev) => ({
      ...prev,
      notes: [...(prev.notes || []),note],
    }));

    setNote("");
  };

  const handleFile = (e) =>{
    const files = Array.from(e.target.files);

    setEditedTask((prev) => ({
      ...prev,
      attachments:[
        ...(prev.attachments || [] ),

        ...files.map(file => ({
          name:file.name,
          size:file.size,
          type:file.type,
        })),
      ],
    }));
  };

  const removeAttachment = (index) => {
    setEditedTask((prev) => ({
      ...prev,
      attachments:
        prev.attachments.filter((_,i) => i !== index),
    }));
  };


  const handleSubmit = (e) =>{
    e.preventDefault();
    updateTask(task.id,editedTask);
    alert("Task Updated Successfully");
  };
  
  return (
    <Layout>
      <button onClick={() => navigate(`/project/${task.projectId}`)}> ← Back to Board </button>

      <div  className="task-details" 
            style={{
              maxWidth:"800px",
              margin:"0 auto",
              padding:"20px"
              }} >
        <h1>Task Details</h1>

        <form onSubmit={handleSubmit}>

          <label >Title</label>
          <input  type="text"
                  name='title' 
                  value={editedTask.title}
                  onChange={handleChange} />

          <br />
          <br />
          
          <label >Description</label>
          <textarea name='description'
                    value={editedTask.description} 
                    onChange={handleChange}
                    rows="4"/>

          <br />
          <br />

          <label >Type</label>
          <input  type="text"
                  name='type'
                  value={editedTask.type}
                  onChange={handleChange}
                />

          <br />
          <br />

          <label >Priority</label>
          <select name='priority'
                  value={editedTask.priority}
                  onChange={handleChange}
          >
            <option value="">Select Priority</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>

          <br />
          <br />

          <label >State</label>
          <select name='state'
                  value={editedTask.state}
                  onChange={handleChange}
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
                  name='dueDate'
                  value={editedTask.dueDate}
                  onChange={handleChange}
                />

          <br />
          <br />

          <label >Due Time</label>
          <input  type="time"
                  name='dueTime'
                  value={editedTask.dueTime}
                  onChange={handleChange}
                />

          <br />
          <br />

          <h3>Notes</h3>
        
          <input  type="text"
                  placeholder='Add Note'
                  value={note}
                  onChange={(e) => setNote(e.target.value)} 
                  />

          <button type="button" onClick={addNote}>
            Add Note
          </button>

          <ul>
            {
              (editedTask.notes || []).map(
                (note,index) => (
                  <li key={index}> {note} </li>
                )
            )}
          </ul>

          <h3>Attachments</h3>

          <input  type="file"
                  multiple
                  onChange={handleFile} />

          <ul>
            {(editedTask.attachments || [])
              .map((file,index) =>(
                <li key={index}>
                  {file.name}
                  (
                    {(file.size/1024).toFixed(2)}KB
                  )

                  <button type='button' onClick={()=>removeAttachment(index)}>
                    Remove
                  </button>
                </li>
              ))}
          </ul>

          <br />

          <button type='submit'>
            Save Changes
          </button>
        </form>
      </div>
    </Layout>
  );
}

export default TaskDetailsPage;