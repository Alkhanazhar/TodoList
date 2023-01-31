import React, { useState } from "react";
import "./Parent.css"

const Parent = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState({ text: "", color: "#000000" });

  const handleSubmit = (event) => {
    event.preventDefault();
    setTodos([...todos, todo]);
    setTodo({ text: "", color: "#000000" });
  };

  const handleTodoChange = (event) => {
    setTodo({ ...todo, [event.target.name]: event.target.value });
  };

  const handleEdit = (index) => {
    const newTodos = [...todos];
    setTodo(newTodos[index]);
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const handleDelete = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const handleMarkComplete = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  return (
    <div className="bodywhite">
      <form onSubmit={handleSubmit} className="width">
        <input
          type="text"
          name="text"
          value={todo.text}
          onChange={handleTodoChange}
        />
        <input
          type="color"
          name="color"
          value={todo.color}
          onChange={handleTodoChange}
        />
        <button type="submit">Add Todo</button>
      </form>
      <Child todos={todos}
        onEdit={handleEdit}
        onDelete={handleDelete}

      />
    </div>
  );
};

const Child = ({ todos, onEdit, onDelete}) => (
  <ul>
    {todos.map((todo, index) => (
      <li key={index} style={{ color: todo.color }}>
        {todo.text}
        {todo.completed && "(completed)"}
        <button onClick={() => onEdit(index)}>Edit</button>
        <button onClick={() => onDelete(index)}>Delete</button>
      </li>
    ))}
  </ul>
);

export default Parent;