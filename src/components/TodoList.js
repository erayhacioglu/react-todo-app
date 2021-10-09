import TodoItem from './TodoItem';

const TodoList = ({ todos, setTodos, filteredTodos }) => {
	return (
		<div className='container justify-content-center'>
			{filteredTodos &&
				filteredTodos.map((todo, key) => (
					<TodoItem key={key} todo={todo} todos={todos} setTodos={setTodos} />
				))}
		</div>
	);
};

export default TodoList;
