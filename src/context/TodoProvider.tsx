import { useState } from 'react'
import TodoContext from './store';
import { ITodo } from '../interfaces/index';

type Props = {
    children?: React.ReactNode;
}

const TodoProvider = ({ children }: Props) => {
    const [todos, setTodos] = useState<ITodo[]>([{
        id: "00421",
        name: "TypeScript",
        completed: false
    }])
    const [completedTasks, setCompletedTasks] = useState<ITodo[]>([])

    
    const addTask = (name: string) => {
        const newTask: ITodo = {
            id: new Date().toLocaleTimeString(),
            name,
            completed: false
        }
        setTodos([...todos, newTask])
        alert("added new task")

    }
    const deleteTask = (id: string) => {
        const newTask = todos.filter(todo => todo.id !== id)

        setTodos(newTask)
    }

    const toggleTask = (id: string) => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    }
    const editTaskHandler = (id: string, editedTask: string) => setTodos(todos.map(todo => todo.id === id ? { ...todo, name: editedTask } : todo))

    return (
        <TodoContext.Provider value={{ todos, addTask, deleteTask, toggleTask, editTaskHandler, completedTasks, setTodos, setCompletedTasks }}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoProvider;