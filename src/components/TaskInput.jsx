import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Add from "@mui/icons-material/Add";
import { Input } from "@mui/material";

const TaskInput = ({ newTodo, setNewTodo, addNewTask }) => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Input
        placeholder="Enter Task"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        sx={{ "--Input-focused": 1, width: 256 }}
      />
      <Button startIcon={<Add />} onClick={addNewTask}>
        Add Task
      </Button>
    </Box>
  );
};

export default TaskInput;
