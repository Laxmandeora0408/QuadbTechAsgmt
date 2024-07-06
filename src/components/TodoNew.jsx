import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TaskInput from "./TaskInput";
import TaskList from "./ListShow";
import {
  upperCaseAll,
  addNewTask,
  deleteTask,
  updateTodoValue,
  toggleEdit,
  saveEditedTask,
  markDone,
  upperCaseOne,
} from "./taskActions";

export default function TodoNewList() {
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
    <div>
      <TaskInput
        newTodo={newTodo}
        setNewTodo={setNewTodo}
        addNewTask={handleAddNewTask}
      />
      <TaskList todos={todos} setTodos={setTodos} />
      <button onClick={() => upperCaseAll(todos, setTodos)}>UpperCase</button>
    </div>
  );
}
