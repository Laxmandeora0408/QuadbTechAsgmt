import { v4 as uuidv4 } from "uuid";

export const addNewTask = (newTodo, todos, setTodos) => {
  const newTask = {
    task: newTodo,
    id: uuidv4(),
    done: false,
    editing: false,
    editedContent: "",
  };
  setTodos([...todos, newTask]);
};

export const deleteTask = (id, setTodos) => {
  setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
};

export const updateTodoValue = (event, id, setTodos) => {
  setTodos((prevTodos) =>
    prevTodos.map((todo) =>
      todo.id === id ? { ...todo, editedContent: event.target.value } : todo
    )
  );
};

export const toggleEdit = (id, setTodos) => {
  setTodos((prevTodos) =>
    prevTodos.map((todo) =>
      todo.id === id
        ? { ...todo, editing: !todo.editing, editedContent: todo.task }
        : todo
    )
  );
};

export const saveEditedTask = (id, setTodos) => {
  setTodos((prevTodos) =>
    prevTodos.map((todo) =>
      todo.id === id
        ? {
            ...todo,
            task: todo.editedContent,
            editing: false,
            editedContent: "",
          }
        : todo
    )
  );
};

export const markDone = (id, setTodos) => {
  setTodos((prevTodos) =>
    prevTodos.map((todo) =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    )
  );
};

export const upperCaseAll = (todos, setTodos) => {
  setTodos(todos.map((todo) => ({ ...todo, task: todo.task.toUpperCase() })));
};

export const upperCaseOne = (id, setTodos) => {
  setTodos((prevTodos) =>
    prevTodos.map((todo) =>
      todo.id === id ? { ...todo, task: todo.task.toUpperCase() } : todo
    )
  );
};
