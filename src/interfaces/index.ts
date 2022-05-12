export interface ITodo {
    id: string;
    name: string;
    // description: string;
    completed: boolean;
}
export type TodoContextType = {
    todos: ITodo[];
    completedTasks: ITodo[];
    addTask: (taskName: string) => void;
    deleteTask: (taskId: string) => void;
    toggleTask: (id: string) => void;
    editTaskHandler: (id: string, editedTask: string) => void;
    setCompletedTasks: React.Dispatch<React.SetStateAction<ITodo[]>>
    setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>
};