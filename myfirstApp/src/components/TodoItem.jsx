import React from 'react';
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

export const TodoItem = (props) => {
  const { todo, handleEditClick, handleDeleteClick } = props;
  return (
    <li>
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

}