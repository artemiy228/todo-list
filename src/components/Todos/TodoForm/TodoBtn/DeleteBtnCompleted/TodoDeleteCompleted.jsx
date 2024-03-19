import { useContext } from 'react'
import { Context } from '../../../../../App'
import styles from './TodoDeleteCompleted.module.scss'

function TodoDeleteCompleted() {
	const [todos, setTodos] = useContext(Context)

	function deleteFilterInCompleted() {
		setTodos(todos.filter(todo => !todo.completed))
	}

	return (
		<button className={styles.btnDelete} onClick={deleteFilterInCompleted}>
			DELETE ALL COMPLETED
		</button>
	)
}

export default TodoDeleteCompleted
