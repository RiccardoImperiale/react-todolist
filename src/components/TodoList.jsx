import Task from "./Task"
import './todolist.css'

export default function TodoList({ todos }) {
    return (
        <div className="container">
            <div className="todo_list">
                <div className="list">
                    <div className="todo_header">
                        <h3>Tasks
                            <div className="pill">{todos.length}</div>
                        </h3>
                        <h3>Completed
                            <div className="pill">{todos.length}</div>
                        </h3>
                    </div>
                    {todos.map(item => (
                        <Task key={item} item={item} />
                    ))}
                </div>
            </div>
        </div>
    )
}