import PropTypes from 'prop-types'
import styles from './Todo.module.scss'
export const Todo = ({ completed, title, id, deleteTask, completeTask }) => {
	console.log(completed)
	return (
		<div
			className={
				completed ? `${styles.todo} ${styles.completed}` : `${styles.todo}`
			}
		>
			{title}
			<div>
				<span className={styles.deleteBtn} onClick={() => deleteTask(id)}>
					X
				</span>
				<span className={styles.completeBtn} onClick={() => completeTask(id)}>
					Y
				</span>
			</div>
		</div>
	)
}
Todo.propTypes = {
	title: PropTypes.string,
	deleteTask: PropTypes.func,
	id: PropTypes.number,
	completed: PropTypes.bool,
	completeTask: PropTypes.func,
}
