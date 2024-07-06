import { useState } from "react"
import { TiPlus } from "react-icons/ti";

import './form.css'
export default function Form({ todos, setTodos }) {
    const [todo, setTodo] = useState({ id: 0, name: '', complete: false })
    const [id, setId] = useState(1);

    function handleSubmit(e) {
        e.preventDefault()
        const newTodo = { ...todo, id: id };
        setId(id + 1)
        setTodos([...todos, newTodo]);
        setTodo({ id: 0, name: '', complete: false })
    }
    return (
        <form onSubmit={handleSubmit} className="container">
            <div className="wrapper">
                <input value={todo.name} onChange={(e) => setTodo({ id: id, name: e.target.value, complete: false })} type="text" placeholder="Something to do?" />
                <button type="submit"><span>Add</span><TiPlus className="plus_icon" /></button>
            </div>
        </form>
    )
}