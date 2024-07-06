import { useState } from "react"
import { TiPlus } from "react-icons/ti";

import './form.css'
export default function Form({ todos, setTodos }) {
    const [todo, setTodo] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        setTodos([...todos, todo])
        setTodo('')
    }
    return (
        <form onSubmit={handleSubmit} className="container">
            <div className="wrapper">
                <input value={todo} onChange={(e) => setTodo(e.target.value)} type="text" placeholder="Something to do?" />
                <button type="submit"><span>Add</span><TiPlus className="plus_icon" /></button>
            </div>
        </form>
    )
}