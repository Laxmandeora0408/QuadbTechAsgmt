import React from "react";
import {
  deleteTask,
  updateTodoValue,
  toggleEdit,
  saveEditedTask,
  markDone,
  upperCaseOne,
} from "../TaskAction";
import { List, ListItem, Button, TextField, Typography } from "@mui/material";

const TaskItem = ({ todo, setTodos }) => {
  return (
    <List sx={{ bgcolor: "background.paper", width: "75%" }}>
      <ListItem
        sx={{
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        {todo.editing ? (
          <Box>
            <TextField
              type="text"
              value={todo.editedContent}
              onChange={(event) => updateTodoValue(event, todo.id, setTodos)}
            />
            <Button
              variant="contained"
              onClick={() => saveEditedTask(todo.id, setTodos)}
              sx={{ marginLeft: 2 }}
            >
              Save
            </Button>
          </Box>
        ) : (
          <>
            <Typography
              variant="body1"
              component="span"
              sx={{
                textDecoration: todo.done ? "line-through" : "none",
                flexGrow: 1,
              }}
            >
              {todo.task}
            </Typography>
            <Button onClick={() => deleteTask(todo.id, setTodos)}>
              Delete
            </Button>
            <Button onClick={() => upperCaseOne(todo.id, setTodos)}>
              Uppercase
            </Button>
            <Button onClick={() => toggleEdit(todo.id, setTodos)}>Edit</Button>
            <Button onClick={() => markDone(todo.id, setTodos)}>Done</Button>
          </>
        )}
      </ListItem>
    </List>
  );
};

export default TaskItem;
