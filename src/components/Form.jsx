import { useState } from "react"
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
            <input value={todo} onChange={(e) => setTodo(e.target.value)} type="text" />
            <button type="submit">Add</button>
        </form>
    )
}