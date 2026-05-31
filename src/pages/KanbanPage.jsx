import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import KanbanColumn from '../components/tasks/KanbanColumn';
import TaskForm from '../components/tasks/TaskForm';
import { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

function KanbanPage() {
  const {projectId} = useParams();

  const {tasks} = useContext(TaskContext);

  const [searchTerm, setSearchTerm] = useState("");

  const [priorityFilter,setPriorityFilter] = useState("");

  const [stateFilter,setStateFilter] = useState("");

  const [sortBy,setSortBy] = useState("");

  const projectTasks = tasks.filter(task =>
    task.projectId === Number(projectId)
  );

  let filteredTasks = projectTasks.filter(task => {
    const matchesSearch = 
      task.title.toLowerCase().includes(searchTerm.toLowerCase())
      || 
      task.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesPriority =
      priorityFilter === ""
      ||
      task.priority === priorityFilter;

    const matchesState = 
      stateFilter === ""
      ||
      task.state === stateFilter;

    return(
      matchesSearch &&
      matchesPriority &&
      matchesState
    );
  });

  if (sortBy === "dueDate"){
    filteredTasks.sort(
      (a,b) =>
        new Date(a.dueDate) - new Date(b.dueDate)
    );
  }

  if (sortBy === "priority"){
    const order = {
      High: 1,
      Medium: 2,
      Low: 3,
    };

    filteredTasks.sort(
      (a,b) =>
        order[a.priority] - order[b.priority]
    );
  }

  return (
    <div className='kanban-page'>
      <h1>Project:{projectId}</h1>

      <TaskForm projectId={projectId} />

      <div className='filters'>

        <input  type="text"
                placeholder='Search Tasks...'
                value={searchTerm}
                onChange={(e)=> setSearchTerm(e.target.value)} />

        <select value={priorityFilter} 
                onChange={(e) => {setPriorityFilter(e.target.value)}}>

          <option value="">All Priorities</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>    
        </select>

        <select value={stateFilter} 
                onChange={(e) => {setStateFilter(e.target.value)}}>

          <option value="">All States</option>
          <option value="Todo">Todo</option>
          <option value="In Progress">In Progress</option>
          <option value="Waiting">Waiting</option>
          <option value="Done">Done</option>    
        </select>

        <select value={sortBy} 
                onChange={(e) => {setSortBy(e.target.value)}}>

          <option value="">No Sorting</option>
          <option value="dueDate">Due Date</option>
          <option value="priority">Priority</option>
        </select>


      </div>


      <div className='kanban-board'>
        <KanbanColumn
          title="Todo"
          tasks={filteredTasks.filter(task => task.state === "Todo")}/>

        <KanbanColumn
          title="In Progress"
          tasks={filteredTasks.filter(task => task.state === "In Progress")}/>
        
        <KanbanColumn
          title="Waiting"
          tasks={filteredTasks.filter(task => task.state === "Waiting")}/>

        <KanbanColumn
          title="Done"
          tasks={filteredTasks.filter(task => task.state === "Done")}/>

      </div>

    </div>
  );
}

export default KanbanPage;
