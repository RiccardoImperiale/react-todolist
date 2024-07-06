import { useState } from 'react';
import './task.css'
import { FaRegTrashCan } from "react-icons/fa6";
import { MdRadioButtonUnchecked, MdCheckCircle } from "react-icons/md";

export default function Task({ item, todos, setTodos }) {
    const [check, setCheck] = useState(false)

    function toggleClick() {
        setCheck(!check)
    }

    function deleteTask(item) {
        setTodos(todos.filter(todo => todo !== item))
    }

    const checkIcon = check ? (
        <MdCheckCircle onClick={toggleClick} className='check' />
    ) : (
        <MdRadioButtonUnchecked onClick={toggleClick} className='uncheck' />
    )

    return (
        <div className="task">
            <h3 className={check ? 'checked' : ''}>
                {checkIcon}
                {item}
            </h3>
            <FaRegTrashCan className='trash' onClick={() => deleteTask(item)} />
            {console.log(check)}
        </div>
    )
}