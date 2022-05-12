import { createContext } from 'react'
import { TodoContextType } from '../interfaces'

// const tasks = {
//     id: "1",
//     name: "mass",
//     completed: false
// }
const TodoContext = createContext<TodoContextType | null>(null)

export default TodoContext;