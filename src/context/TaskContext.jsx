import React, { useEffect } from 'react'
import { createContext,useState } from 'react'

export const TaskContext = createContext();

function TaskProvider({children}) {
    const [tasks,setTasks] = useState(()=>{
      const savedTasks = localStorage.getItem("tasks");

      return savedTasks ? JSON.parse(savedTasks):[];
    });

    useEffect(() => {
      localStorage.setItem("tasks",JSON.stringify(tasks));
    },[tasks]);



    const addTask = (task) => {
        setTasks([...tasks,task]);
    };

    const deleteTask = (id) =>{
      setTasks(tasks.filter(task => task.id !== id));
    };

    const updateTask = (id,updatedTask) => {
      setTasks(tasks.map(task => task.id === id ? updatedTask:task));
    };
  return (
    <TaskContext.Provider
        value={{tasks,addTask,deleteTask,updateTask}}>
        {children}
    </TaskContext.Provider>
  );
}

export default TaskProvider;