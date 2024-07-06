import './task.css'
import { FaRegTrashCan } from "react-icons/fa6";
import { MdRadioButtonUnchecked, MdCheckCircle } from "react-icons/md";

export default function Task({ item, todos, setTodos }) {

    function toggleCompleted(id) {
        const updatedComplete = todos.map(todo => todo.id === id ? { ...todo, complete: !todo.complete } : todo)
        setTodos(updatedComplete);
        localStorage.setItem('todos', JSON.stringify(updatedComplete));
    }

    function deleteTask(id) {
        const updatedTodos = todos.filter(todo => todo.id !== id);
        setTodos(updatedTodos);
        localStorage.setItem('todos', JSON.stringify(updatedTodos));
    }

    const checkIcon = item.complete ? (
        <MdCheckCircle onClick={() => toggleCompleted(item.id)} className='check' />
    ) : (
        <MdRadioButtonUnchecked onClick={() => toggleCompleted(item.id)} className='uncheck' />
    )

    return (
        <div className="task">
            <h3 className={item.complete ? 'checked' : ''}>
                {checkIcon}
                {item.name}
            </h3>
            <FaRegTrashCan className='trash' onClick={() => deleteTask(item.id)} />
        </div>
    )
}