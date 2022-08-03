import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container, Form, Input, InputGroup, Button } from "reactstrap";

function App() {
	const [value, setValue] = useState("");
	const [todos, setTodos] = useState([]);

	const handleSubmit = (e) => {
		e.preventDefault();
		addTodo(value);
	};

	const addTodo = (text) => {
		const newTodos = [...todos, text];
		setTodos(newTodos);
		console.log(newTodos);
	};

	return (
		<div className="App">
			<Container>
				<h1 className="mt-4">Todo List</h1>
				<Form onSubmit={handleSubmit}>
					<InputGroup>
						<Input
							type="text"
							value={value}
							onChange={(e) => setValue(e.target.value)}
						/>
						<Button type="submit" color="primary">
							Add
						</Button>
					</InputGroup>
				</Form>
			</Container>
		</div>
	);
}

export default App;
