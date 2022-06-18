import React, { useState,useEffect } from "react";
import "./App.css";
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
  //編集中か判定するステート
  const [isEditing, setIsEditing] = useState(false);
  // 編集済みタスクのステート
  const [currentTodo, setCurrentTodo] = useState({});

  //TODOに変更が生じたらローカルストレージを更新
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos]);

  //新規TODOが入力されたらTodoTextを更新
  const onChangeTodoText = (event) => setTodoText(event.target.value);
  //追加ボタンが押されたら追加済みtodoのステートを更新、入力欄を空にする
  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...todos, { id: todos.length + 1, text: todoText}];
    setTodos(newTodos)
    setTodoText("");
  }

  //削除ボタンが押されたら追加済みtodoのステートを更新
  const handleDeleteClick = (id) => {
    const removeItem = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(removeItem);
  } 

  //編集ボタンを押したら編集モードに切り替わる
  const handleEditClick = (todo) => {
    setIsEditing(true);
    setCurrentTodo({ ...todo });
  }

  //編集モードが入力されたらcurrentTodoを更新
  const handleEditInputChange = (event) => {
    setCurrentTodo({ ...currentTodo, text: event.target.value });
  }

  const handleUpdateTodo = (id, updatedTodo) => {
    const updatedItem = todos.map((todo) => {
        return todo.id === id ? updatedTodo : todo;
      });
      setIsEditing(false);
      setTodos(updatedItem);
  }
  const handleEditFormSubmit = (e) => {
    handleUpdateTodo(currentTodo.id, currentTodo)
  }

  return (
    <>
      <header>
          <h1>todos</h1>  
      </header>
      <div className="input-area">
        <div className="input-container">
        {isEditing ? (
          <>
            <input
                name = "editTodo"
                type="text"
                placeholder="Edit your todo"
                value={currentTodo.text}
                onChange={handleEditInputChange}
            />
            <button className="update-btn" onClick={handleEditFormSubmit}>Update</button>
            <button className="cancel-btn" onClick={() => setIsEditing(false)}>Cancel</button>
          </>
        ) : (
          <>
            <input 
              type = "text"
              placeholder = "Enter your todo"
              value = { todoText } 
              onChange = { onChangeTodoText } 
            />
            <button className="add-btn" onClick={onClickAdd}>+</button>  
          </>
      )}
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
                      <button className="edit-btn" onClick={() => handleEditClick(todo)}><EditIcon /></button>
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