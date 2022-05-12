import * as React from 'react';
import { ITodo, TodoContextType } from '../interfaces';
import "./styles.css"
import { AiFillEdit, AiFillDelete } from "react-icons/ai"
import { MdDone } from "react-icons/md"
import TodoContext from '../context/store';
import { Draggable } from 'react-beautiful-dnd';


interface ITaskProps {
    index: number,
    todo: ITodo,
    completedTasks?: ITodo[],
    setCompletedTasks?: React.Dispatch<React.SetStateAction<ITodo[]>>
}

const Task: React.FunctionComponent<ITaskProps> = ({ todo, index }) => {
    const inputRef = React.useRef<HTMLInputElement>(null)
    const [edit, setEdit] = React.useState<boolean>(false)
    const [editTask, setEditTask] = React.useState<string>(todo.name)

    const { deleteTask, toggleTask, editTaskHandler } = React.useContext(TodoContext) as TodoContextType;
    const handleDelete = (id: string) => {
        if (window.confirm("Are you sure you want to delete ?")) {
            deleteTask(id)
        }
    }
    const handleEdition = () => {

        if (!edit && !todo.completed) {
            setEdit(!edit)
        }
    }
    const handleChangeEdition = (e: React.ChangeEvent<HTMLInputElement>) => setEditTask(e.target.value)

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        editTaskHandler(todo.id, editTask)
        setEdit(false)
    }

    React.useEffect(() => {
        inputRef.current?.focus()
    }, [edit])

    return (
        <Draggable draggableId={todo.id.toString()} index={index}>
            {(provided, snapshot) => (
                <form
                    className={`todos__single ${snapshot.isDragging ? "drag" : ""}`}
                    onSubmit={onSubmit}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                >
                    {edit ? (<input type={'text'} value={editTask} onChange={handleChangeEdition} ref={inputRef} className="todos__single--text" />) : (
                        todo.completed ? (
                            <s className="todos__single--text">{todo.name}</s>

                        ) : (
                            <span className="todos__single--text">{todo.name}</span>

                        )
                    )}
                    <div>
                        <span className="icon" onClick={handleEdition}>
                            <AiFillEdit />
                        </span>
                        <span className="icon" onClick={() => handleDelete(todo.id)}>
                            <AiFillDelete />
                        </span> <span className="icon" onClick={() => toggleTask(todo.id)}>
                            <MdDone />
                        </span>
                    </div>
                </form>
            )}
        </Draggable>
    );
};

export default Task;
