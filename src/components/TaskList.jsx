import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ todos, setTodos }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TaskItem key={todo.id} todo={todo} setTodos={setTodos} />
      ))}
    </ul>
  );
};

export default TaskList;
