import React, { useState, useEffect } from "react";

function useTodoHooks() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      setTodos(["Go Running", "Study"]);
    }, 2000);
  }, []);
  return [todos, setTodos];
}

export default function TodoHooks() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useTodoHooks();

  const handleInputChange = (e) => {
    setText(e.target.value);
  };
  const handleAddItem = () => {
    const newTodos = [...todos];
    newTodos.push(text);
    setTodos(newTodos);
    setText("");
  };

  const todoList = todos.map((todo) => {
    return <li>{todo}</li>;
  });
  return (
    <>
      <div>My Todo List with Hooks:</div>
      <ul>{todoList}</ul>
      <input
        placeholder="Todo item"
        value={text}
        onChange={handleInputChange}
      />
      <button onClick={handleAddItem}>Add Item</button>
    </>
  );
}
