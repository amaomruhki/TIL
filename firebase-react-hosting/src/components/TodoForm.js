import React, { useState, useContext } from "react";
import { Form, Input, InputGroup, Button } from "reactstrap";
import { TodosContext } from "../contexts/TodosContext";

const TodoForm = () => {
	const { addTodo } = useContext(TodosContext);
	const [value, setValue] = useState("");
	const handleSubmit = (e) => {
		e.preventDefault();
		addTodo(value);
		setValue("");
	};

	return (
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
	);
};

export default TodoForm;
