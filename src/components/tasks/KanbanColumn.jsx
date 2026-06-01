import React from 'react'
import { Droppable, Draggable } from '@hello-pangea/dnd';
import TaskCard from './TaskCard';

function KanbanColumn({title,tasks}) {
  return (
    <Droppable droppableId={title}>

      {(provided) => (
        <div
          className='kanban-column'
          ref={provided.innerRef}
          {...provided.droppableProps}>

          <h2>{title}</h2>

          {tasks.map(
            (task,index) => (
              <Draggable
                key={task.id}
                draggableId={String(task.id)}
                index={index}>

                  {(provided) => (
                    <TaskCard task={task} provided={provided}/>
                  )}

              </Draggable>
            )
          )}

          {provided.placeholder}

        </div>

      )}

    </Droppable>
  );
}

export default KanbanColumn;
