import * as React from 'react';
import { TodoContextType } from '../interfaces';
import "./styles.css"
import TodoContext from '../context/store';
import Task from '../components/Task';
import { Droppable } from 'react-beautiful-dnd';



const TaskList: React.FunctionComponent = () => {

  const { todos, completedTasks } = React.useContext(TodoContext) as TodoContextType;


  return (
    <div className="container">
      <Droppable droppableId='TasksList'>
        {
          (provided, snapshot) => (
            <div className={`todos ${snapshot.isDraggingOver ? "dragActive" : ""}`} ref={provided.innerRef} {...provided.droppableProps}>
              <span className="todos__heading">Active Tasks</span>
              {todos.length > 0 ? (
                todos.map((todo, index) => (
                  <Task key={todo.id} index={index} todo={todo} />
                ))
              ) : "No tasks yet!"}
              {provided.placeholder}
            </div>
          )
        }
      </Droppable>
      <Droppable droppableId='TasksCompleted'>
        {
          (provided, snapshot) => (
            <div className={`todos remove ${snapshot.isDraggingOver ? "dragComplete" : ""}`} ref={provided.innerRef} {...provided.droppableProps}>
              <span className="todos__heading">Completed Tasks</span>

              {completedTasks.length > 0 ? (
                completedTasks.map((task, index) => (
                  <Task key={task.id} todo={task} index={index} completedTasks={completedTasks} />
                ))
              ) : "No tasks completed yet!"}
              {provided.placeholder}

            </div>
          )
        }
      </Droppable>

    </div>
  );
};

export default TaskList;

