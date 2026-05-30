import React from 'react'
import { createContext,useState } from 'react'

export const TaskContext = createContext();

function TaskProvider({children}) {
    const [tasks,setTasks] = useState([]);

    const addTask = (task) => {
        setTasks([...tasks,task]);
    };
  return (
    <TaskContext.Provider
        value={{tasks,addTask}}>
        {children}
    </TaskContext.Provider>
  );
}

export default TaskProvider;