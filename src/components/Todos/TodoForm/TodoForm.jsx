import { useContext, useState } from 'react'
import { Context } from '../../../App'
import TodoDeleteAll from './TodoBtn/DeleteBtn/TodoDeleteAll'
import TodoDeleteCompleted from './TodoBtn/DeleteBtnCompleted/TodoDeleteCompleted'
import styles from './TodoForm.module.css'
function TodoForm() {
	const [todos, setTodos] = useContext(Context)
	const [todo, setTodo] = useState('')

	function addBtn() {
		const newTodo = {
			id: Date.now(),
			completed: false,
			task: todo,
		}
		setTodos([...todos, newTodo])
		setTodo('')
	}
	return (
		<>
			<div>
				<input
					className={styles.inp}
					type='text'
					value={todo}
					onChange={e => setTodo(e.target.value)}
				/>
				<button onClick={addBtn}>ADD TODO</button>
			</div>
			<TodoDeleteAll />
			<TodoDeleteCompleted />
		</>
	)
}

export default TodoForm
