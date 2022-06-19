import React, { useState,useEffect } from "react";
import "./App.css";
import { EditTodo } from "./components/EditTodo";
import { AddTodo } from "./components/AddTodo";
import { TodoItem } from "./components/TodoItem";

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
  const onEditInputChange = (event) => {
    setCurrentTodo({ ...currentTodo, text: event.target.value });
  }

  //編集されたTODOをidで照合して書き換える
  const handleUpdateTodo = (id, updatedTodo) => {
    const updatedItem = todos.map((todo) => {
        return todo.id === id ? updatedTodo : todo;
      });
      setIsEditing(false);
      setTodos(updatedItem);
  }
  const onEditFormSubmit = (e) => {
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
            <EditTodo
              currentTodo={currentTodo}
              onEditInputChange={onEditInputChange}
              onEditFormSubmit={onEditFormSubmit}
              setIsEditing={setIsEditing}
            />
        ) : (
            <AddTodo
                todoText={todoText}
                onChangeTodoText={onChangeTodoText}
                onClickAdd={onClickAdd}
            />
      )}
        </div>
      </div>

      <div className="todos-area">
        <ul>
          {todos.map((todo) => {
            return (
              <TodoItem
                key={todo.id}
                todo={todo}
                handleEditClick={handleEditClick}
                handleDeleteClick={handleDeleteClick}
              />
            )
          })}
        </ul>
      </div>
    </>
  )
};