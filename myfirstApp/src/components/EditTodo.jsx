import React from 'react';
export const EditTodo = (props) => {
  const { currentTodo, onEditInputChange, onEditFormSubmit, setIsEditing } = props;
  return (
    <>
    <input
        name = "editTodo"
        type="text"
        placeholder="Edit your todo"
        value={currentTodo.text}
        onChange={onEditInputChange}
    />
    <button className="update-btn" onClick={onEditFormSubmit}>Update</button>
    <button className="cancel-btn" onClick={() => setIsEditing(false)}>Cancel</button>
    </>
  )

}