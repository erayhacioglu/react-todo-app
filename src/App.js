import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Form from './components/Form';
import TodoList from './components/TodoList';

const App = () => {
	const [todos, setTodos] = useState([]);
	const [status, setStatus] = useState('all');
	const [filteredTodos, setFilteredTodos] = useState([]);

	useEffect(() => {
		if (localStorage.getItem('todoList') === null) {
			localStorage.setItem('todoList', JSON.stringify([]));
		} else {
			const todoLocal = JSON.parse(localStorage.getItem('todoList'));
			setTodos(todoLocal);
		}
	}, []);

	useEffect(() => {
		filterHandler();
		localStorage.setItem('todoList', JSON.stringify(todos));
	}, [status, todos]);

	const filterHandler = () => {
		if (status === 'completed') {
			return setFilteredTodos(todos.filter((item) => item.completed === true));
		} else if (status === 'uncompleted') {
			return setFilteredTodos(todos.filter((item) => item.completed === false));
		} else {
			return setFilteredTodos(todos);
		}
	};

	const allDelete = () => {
		setTodos([]);
	};

	return (
		<>
			<Navbar />
			<div className='container mt-3 d-flex justify-content-end'>
				{todos.length > 0 && (
					<button className='btn btn-danger' onClick={allDelete}>
						All Delete
					</button>
				)}
			</div>
			<Form
				todos={todos}
				setTodos={setTodos}
				status={status}
				setStatus={setStatus}
			/>
			<TodoList
				todos={todos}
				setTodos={setTodos}
				filteredTodos={filteredTodos}
			/>
		</>
	);
};

export default App;
