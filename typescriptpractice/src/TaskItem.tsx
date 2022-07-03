import React, { useState } from 'react';
import firebase from "firebase/app";
import { ListItem, Grid, TextField } from '@material-ui/core';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';

interface PROPS {
  id: string;
  title: string;
}

const TaskItem: React.FC<PROPS> = (props) => {
  const [title, setTitle] = useState(props.title);

  return (
      <ListItem>
      <h2>{props.title}</h2>
      <Grid container justify="flex-end">
        <TextField label="Edit task"
          value={title}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value) } 
        />
      </Grid>
      </ListItem>
  )
}

export default TaskItem