import Task from "./Task"
import './todolist.css'

import { motion, AnimatePresence } from "framer-motion";

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
                    <AnimatePresence>
                        {sortedTasks.map(item => (
                            <motion.div
                                key={item.id}
                                layout
                                transition={{ duration: 0.3, type: "spring", stiffness: 500, damping: 30 }}
                            >
                                <Task key={item.id} item={item} todos={todos} setTodos={setTodos} />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                    <motion.div
                        className="todo_it"
                        layout
                        transition={{ duration: 0.3, type: "spring", stiffness: 500, damping: 30 }}
                    >
                        <img width={180} src="./logo-text.png" alt="just todo it logo" />
                    </motion.div>
                </div>
            </div>
        </div>
    )
}