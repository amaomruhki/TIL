import React, { useState,useEffect } from "react";
import "./index.css";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

export const App = () => {
  //入力欄のtodoのステート
  const [todoText, setTodoText] = useState("");
  //追加済みtodoのステート 
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);
  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...todos, { id: todos.length + 1, text: todoText}];
    setTodos(newTodos)
    setTodoText("");
  }
  const handleDeleteClick = (id) => {
    const removeItem = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(removeItem);
  } 

  return (
    <>
      <header>
          <h1>todos</h1>  
      </header>

      <div className="input-area">
        <div className="input-container">
          <input type="text" placeholder="Enter your todo" value={todoText} onChange={onChangeTodoText} />
          <button className="add-btn" onClick={onClickAdd}>+</button>
        </div>
      </div>

      <div className="todos-area">
        <ul>
          {todos.map((todo) => {
            return (
              <li key={todo.id}>
                <div className="list-row">
                  <select name="status" id="status">
                    <option value="1">Waiting</option>
                    <option value="2">Working</option>
                    <option value="3">Completed</option>
                    <option value="4">Pending</option>
                  </select>
                    <p>{todo.text}</p>
                  <button className="edit-btn"><EditIcon /></button>
                  <button className="delete-btn" onClick={() => handleDeleteClick(todo.id)}><DeleteForeverIcon /></button>
                </div>
              </li>
            )
          })}
        </ul>
      </div>

    </>
  )
};