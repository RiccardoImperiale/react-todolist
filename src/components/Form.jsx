import { useState } from "react"
import { TiPlus } from "react-icons/ti";

import './form.css'
export default function Form({ todos, setTodos }) {
    const [todo, setTodo] = useState({ name: '', complete: false })

    function handleSubmit(e) {
        e.preventDefault()
        setTodos([...todos, todo])
        setTodo({ name: '', complete: false })
    }
    return (
        <form onSubmit={handleSubmit} className="container">
            <div className="wrapper">
                <input value={todo.name} onChange={(e) => setTodo({ name: e.target.value, complete: false })} type="text" placeholder="Something to do?" />
                <button type="submit"><span>Add</span><TiPlus className="plus_icon" /></button>
            </div>
        </form>
    )
}