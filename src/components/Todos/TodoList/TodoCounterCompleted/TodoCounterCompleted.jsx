import { useContext } from 'react'
import { Context } from '../../../../App'
import styles from './TodoCounterCompleted.module.scss'
export function TodoCounterCompleted() {
	const [todos] = useContext(Context)
	let countCompletedTodos = todos.filter(todo => todo.completed)
	return (
		<div className={styles.completed}>
			{countCompletedTodos.length > 0
				? `Выполнено ${countCompletedTodos.length} tasks!`
				: ''}
		</div>
	)
}
