import './task.css'
import { FaRegTrashCan } from "react-icons/fa6";
import { MdRadioButtonUnchecked, MdCheckCircle } from "react-icons/md";

export default function Task({ item, todos, setTodos }) {

    function toggleCompleted(id) {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, complete: !todo.complete } : todo))
    }

    function deleteTask(id) {
        setTodos(todos.filter(todo => todo.id !== id))
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