import React, { useState } from "react";

import { upperCaseAll, addNewTask } from "./TaskAction";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import { v4 as uuidv4 } from "uuid";
import { Box, Typography } from "@mui/material";

const App = () => {
  const [todos, setTodos] = useState([
    {
      task: "sample Test",
      id: uuidv4(),
      done: false,
      editing: false,
      editedContent: "",
    },
  ]);
  const [newTodo, setNewTodo] = useState("");

  const handleAddNewTask = () => {
    addNewTask(newTodo, todos, setTodos);
    setNewTodo("");
  };

  return (
    <>
      <Box justifyContent="center" alignItems="center" textAlign="center" m={2}>
        <Typography variant="h2" m={2}>
          To-Do Application
        </Typography>
        <TaskInput
          newTodo={newTodo}
          setNewTodo={setNewTodo}
          addNewTask={handleAddNewTask}
        />
        <TaskList todos={todos} setTodos={setTodos} />
      </Box>
    </>
  );
};

export default App;
