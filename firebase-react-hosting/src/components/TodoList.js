import React, { useContext } from "react";
import { Table, Button } from "reactstrap";
import { TodosContext } from "../contexts/TodosContext";

const TodoList = () => {
	const { todos, completeTodo, removeTodo } = useContext(TodosContext);

	return (
		<Table>
			<tbody>
				{todos &&
					todos.map((todo, index) => (
						<tr key={index}>
							<th
								className="text-start"
								style={{
									textDecoration: todo.complete ? "line-through" : "",
								}}
							>
								{todo.text}
							</th>
							<td className="text-end">
								<Button
									color={todo.complete ? "secondary" : "success"}
									className="me-2"
									onClick={() => completeTodo(index)}
								>
									{todo.complete ? "完了" : "未完了"}
								</Button>
								<Button color="danger" onClick={() => removeTodo(index)}>
									delete
								</Button>
							</td>
						</tr>
					))}
			</tbody>
		</Table>
	);
};

export default TodoList;
