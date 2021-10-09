import { useState } from 'react';

const Search = ({ setTodos, setStatus }) => {
	const [inputText, setInputText] = useState('');

	const addTodo = () => {
		setTodos((prev) => [
			...prev,
			{
				id: Math.floor(Math.random() * 1000000000),
				text: inputText,
				completed: false,
			},
		]);
		setInputText('');
	};

	return (
		<div className='container my-4'>
			<div className='search col-md-8 offset-md-2 py-2'>
				<div className='row'>
					<div className='col-md-8'>
						<div className='input-group'>
							<input
								type='text'
								className='form-control'
								placeholder='add todo'
								value={inputText}
								onChange={(e) => setInputText(e.target.value)}
							/>
							<div className='input-group-append'>
								<button
									type='submit'
									className='btn btn-primary'
									onClick={addTodo}
								>
									Add Todo
								</button>
							</div>
						</div>
					</div>
					<div className='col-md-4'>
						<select
							className='form-select'
							name='status'
							onChange={(e) => setStatus(e.target.value)}
							aria-label='Default select example'
						>
							<option value='full' defaultValue>
								Full
							</option>
							<option value='completed'>Completed</option>
							<option value='uncompleted'>Uncompleted</option>
						</select>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Search;
