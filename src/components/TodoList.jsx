import Task from "./Task"
import './todolist.css'

export default function TodoList({ todos, setTodos }) {
    let completedTasks = todos.filter(todo => todo.complete === true).length
    const sortedTasks = todos.slice().sort((a, b) => Number(a.complete) - Number(b.complete))
    return (
        <div className="container">
            <div className="todo_list">
                <div className="list">
                    <div className="todo_header">
                        <h3>Total Tasks
                            <div className="pill">{todos.length}</div>
                        </h3>
                        <h3>Completed
                            <div className="pill">{completedTasks}</div>
                        </h3>
                    </div>

                    {sortedTasks.map(item => (
                        <Task key={item.id} item={item} todos={todos} setTodos={setTodos} />
                    ))}

                </div>
                <div className="todo_it">
                    <img width={180} src="./logo-text.png" alt="" />
                </div>
            </div>
        </div>
    )
}