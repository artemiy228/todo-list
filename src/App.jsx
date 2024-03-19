import React, { useState } from 'react'
import './App.css'
import TodoForm from './components/Todos/TodoForm/TodoForm'
import TodoList from './components/Todos/TodoList/TodoList'
export const Context = React.createContext()

function App() {
	const [todos, setTodos] = useState([])

	return (
		<Context.Provider value={[todos, setTodos]}>
			<TodoForm />
			<TodoList />
		</Context.Provider>
	)
}

export default App
