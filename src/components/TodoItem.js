const TodoItem = ({ todo, todos, setTodos }) => {
	const deleteTodo = () => {
		setTodos(todos.filter((item) => item.id !== todo.id));
	};

	const completedTodo = () => {
		setTodos(
			todos.map((item) => {
				if (item.id === todo.id) {
					return {
						...item,
						completed: !item.completed,
					};
				}
				return item;
			})
		);
	};
	return (
		<div
			className='p-3 mb-3 d-flex align-items-center justify-content-between'
			style={{
				background: '#ddd',
				borderRadius: '5px',
				opacity: `${todo.completed ? '0.5' : ''}`,
			}}
		>
			<div
				style={{ textDecoration: `${todo.completed ? 'line-through' : ''}` }}
			>
				{todo.text}
			</div>
			<div>
				<button className='btn btn-success' onClick={completedTodo}>
					<i className='fas fa-check' />
				</button>
				<button className='btn btn-danger ms-3' onClick={deleteTodo}>
					<i className='fas fa-trash-alt' />
				</button>
			</div>
		</div>
	);
};

export default TodoItem;
