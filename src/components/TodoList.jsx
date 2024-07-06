import Task from "./Task"
import './todolist.css'

export default function TodoList({ todos, setTodos }) {
    let completedTasks = todos.filter(todo => todo.complete === false)
    return (
        <div className="container">
            <div className="todo_list">
                <div className="list">
                    <div className="todo_header">
                        <h3>Tasks
                            <div className="pill">{todos.length}</div>
                        </h3>
                        <h3>Completed
                            <div className="pill">{completedTasks.length}</div>
                        </h3>
                    </div>
                    {todos.map(item => (
                        <Task key={item.name} item={item} todos={todos} setTodos={setTodos} />
                    ))}
                </div>
            </div>
        </div>
    )
}