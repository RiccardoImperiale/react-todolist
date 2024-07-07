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

    function updateTodo(updatedItem) {
        const updatedTodos = todos.map(todo => todo.id === updatedItem.id ? { ...todo, name: updatedItem.name } : todo);
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
            <div>
                {checkIcon}
                <input className={item.complete ? 'checked' : ''} type="text" value={item.name} onChange={(e) => updateTodo({ id: item.id, name: e.target.value, complete: item.complete })} />
            </div>
            <FaRegTrashCan className='trash' onClick={() => deleteTask(item.id)} />
        </div>
    )
}