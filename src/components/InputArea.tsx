import { useContext, useState, useRef } from 'react';
import TodoContext from '../context/store';
import { TodoContextType } from '../interfaces';
import "./styles.css";

interface IInputAreaProps {
}

const InputArea: React.FunctionComponent<IInputAreaProps> = (props) => {
    const inputRef = useRef<HTMLButtonElement>(null)
    const { addTask } = useContext(TodoContext) as TodoContextType;


    const [todo, setTodo] = useState<string>("")

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        addTask(todo)
        setTodo("")
        inputRef.current?.blur()
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTodo(e.target.value)
    }

    return (
        <>
            <form className="input" onSubmit={handleSubmit}>
                <input type="text"
                    placeholder='Enter a task'
                    className='input__box'
                    value={todo}
                    onChange={handleChange}
                />
                <button type="submit"
                    className="input__submit"
                    ref={inputRef}
                    disabled={todo.length < 3}
                >
                    Go
                </button>
            </form>
        </>
    );
};

export default InputArea;
