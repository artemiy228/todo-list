import { useContext } from 'react'
import { Context } from '../../../../../App'
import styles from './TodoDeleteAll.module.scss'

function TodoDeleteAll() {
	const [todos, setTodos] = useContext(Context)

	function deleteAllTodo() {
		console.log(todos)
		setTodos([])
	}
	return (
		<button className={styles.btnDelete} onClick={deleteAllTodo}>
			DELETE ALL
		</button>
	)
}

export default TodoDeleteAll
