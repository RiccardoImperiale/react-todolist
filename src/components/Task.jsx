import './task.css'
import { FaRegTrashCan } from "react-icons/fa6";
import { MdRadioButtonUnchecked, MdCheckCircle } from "react-icons/md";

export default function Task({ item, todos, setTodos }) {

    function toggleCompleted(name) {
        setTodos(todos.map(todo => todo.name === name ? { ...todo, complete: !todo.complete } : todo))
    }

    function deleteTask(item) {
        setTodos(todos.filter(todo => todo.name !== item))
    }

    const checkIcon = item.complete ? (
        <MdCheckCircle onClick={() => toggleCompleted(item.name)} className='check' />
    ) : (
        <MdRadioButtonUnchecked onClick={() => toggleCompleted(item.name)} className='uncheck' />
    )

    return (
        <div className="task">
            <h3 className={item.complete ? 'checked' : ''}>
                {checkIcon}
                {item.name}
            </h3>
            <FaRegTrashCan className='trash' onClick={() => deleteTask(item.name)} />
        </div>
    )
}