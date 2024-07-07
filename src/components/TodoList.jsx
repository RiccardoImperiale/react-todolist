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
                        <motion.div
                            className="task_list"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            {sortedTasks.map(item => (
                                <motion.div
                                    key={item.id}
                                    layout
                                    transition={{ duration: 0.3, type: "spring", stiffness: 500, damping: 30 }}
                                >
                                    <Task key={item.id} item={item} todos={todos} setTodos={setTodos} />
                                </motion.div>
                            ))}
                            <div className="todo_it">
                                <img width={180} src="./logo-text.png" alt="" />
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    )
}