import React from 'react';
export const AddTodo = (props) => {
  const { todoText,onChangeTodoText,onClickAdd  } = props;
  return (
    <>
      <input 
        type = "text"
        placeholder = "Enter your todo"
        value = { todoText } 
        onChange = { onChangeTodoText } 
      />
      <button className="add-btn" onClick={onClickAdd}>+</button>  
    </>
  )

}