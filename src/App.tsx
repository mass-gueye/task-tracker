import './App.css';
import Header from './components/Header';
import InputArea from './components/InputArea';
import TaskList from './container/TaskList';
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import React from 'react'
import TodoContext from './context/store';
import { TodoContextType } from './interfaces';


function App() {
  const { todos, setTodos, completedTasks, setCompletedTasks } = React.useContext(TodoContext) as TodoContextType;
  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    if (!destination) return;
    if (destination?.droppableId === source.droppableId && destination?.index === source.index) return

    let add, active = todos, complete = completedTasks;
    if (source.droppableId === "TasksList") {
      add = active[source.index];
      active.splice(source.index, 1)
    } else {
      add = complete[source.index];
      complete.splice(source.index, 1)
    }

    if (destination.droppableId === "TasksList") {
      active.splice(destination.index, 0, add)
    } else {
      complete.splice(destination.index, 0, add)
    }
    setCompletedTasks(complete)
    setTodos(active)
  }
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="App">
        <Header />
        <InputArea />
        <TaskList />
      </div>
    </DragDropContext>
  );
}

export default App;
