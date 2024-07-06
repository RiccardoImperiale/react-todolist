import { useState, useEffect } from "react"
import { TiPlus } from "react-icons/ti";

import './form.css'
export default function Form({ todos, setTodos }) {
    const [todo, setTodo] = useState({ id: 0, name: '', complete: false })
    const [id, setId] = useState(1);

    useEffect(() => {
        let local = JSON.parse(localStorage.getItem('todos')) || []
        setTodos(local);
        if (local.length > 0) {
            setId(local[local.length - 1].id + 1)
        } else {
            setId(1)
        }
    }, [setTodos]);

    function handleSubmit(e) {
        e.preventDefault()
        if (todo.name.trim() === '') {
            return
        }
        const newTodo = { ...todo, id: id };
        setId(id + 1)
        setTodos([...todos, newTodo]);
        localStorage.setItem('todos', JSON.stringify([...todos, newTodo]));
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