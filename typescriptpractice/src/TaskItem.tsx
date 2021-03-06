import React, { useState } from 'react';
import styles from "./TaskItem.module.css"
import { db } from './firebase';
import { ListItem, Grid, TextField } from '@material-ui/core';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';

interface PROPS {
  id: string;
  title: string;
}
const TaskItem: React.FC<PROPS> = (props) => {
  const [title, setTitle] = useState(props.title);

  const editTask = () => {
    db.collection("tasks").doc(props.id).set({ title: title }, { merge: true });
  };

  const deleteTask = () => {
    db.collection("tasks").doc(props.id).delete();
  }

  return (
      <ListItem>
      <h2>{props.title}</h2>
      <Grid container justifyContent="flex-end">
        <TextField label="Edit task"
          value={title}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value) } 
        />
      </Grid>
      <button className={styles.taskItem__icon} onClick={editTask}>
        <EditOutlinedIcon />
      </button>
      <button className={styles.taskItem__icon} onClick={deleteTask}>
        <DeleteOutlineOutlinedIcon />
      </button>
      </ListItem>
  )
}

export default TaskItem