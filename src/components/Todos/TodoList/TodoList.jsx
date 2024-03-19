import { useContext } from 'react'
import { Context } from '../../../App'
import { Todo } from '../Todo/Todo'
import { TodoCounterCompleted } from '../TodoList/TodoCounterCompleted/TodoCounterCompleted'
import styles from './TodoList.module.css'
function TodoList() {
	const [todos, setTodos] = useContext(Context)
	function deleteTask(id) {
		setTodos(todos.filter(todo => todo.id !== id))
	}
	function completeTask(id) {
		setTodos(
			todos.map(todo =>
				todo.id === id ? { ...todo, completed: !todo.completed } : todo
			)
		)
	}
	console.log(todos)
	return (
		<>
			<div className={styles.list}>
				<div className={styles.block}>
					{todos.map(todo => (
						<Todo
							key={todo.id}
							id={todo.id}
							title={todo.task}
							completed={todo.completed}
							deleteTask={deleteTask}
							completeTask={completeTask}
						/>
					))}
				</div>
			</div>
			<TodoCounterCompleted />
		</>
	)
}

export default TodoList
