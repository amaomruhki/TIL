import React, { useState } from "react";
import "./index.css";
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

export const App = () => {
  const [todoText, setTodoText] = useState('');
  const [todos, setTodos] = useState(['くろしろにごはん','くろしろにごはんくろしろにごはんくろしろにごはんくろしろにごはんくろしろにごはんくろしろにごはんくろしろにごはんくろしろにごはん']);

  return (
    <>
      <header>
          <h1>todos</h1>  
      </header>

      <div className="input-area">
        <div className="input-container">
          <input type="text" placeholder="Enter your todo" value={todoText} />
          <button className="add-btn">+</button>
        </div>
      </div>

      <div className="todos-area">
        <ul>
          {todos.map((todo) => {
            return (
              <li key={todo}>
                <div className="list-row">
                  <select name="status" id="status">
                    <option value="1">Waiting</option>
                    <option value="2">Working</option>
                    <option value="3">Completed</option>
                    <option value="4">Pending</option>
                  </select>
                    <p>{todo}</p>
                  <button className="edit-btn"><EditIcon /></button>
                  <button className="delete-btn"><DeleteForeverIcon /></button>
                </div>
              </li>
            )
          })}
        </ul>
      </div>

    </>
  )
};