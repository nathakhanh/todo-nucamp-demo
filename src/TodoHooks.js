import React, { useState, useEffect } from "react";

export default function TodoHooks() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setTodos(["do laundry", "get a haircut"]);
    }, 2000);
  }, []);

  const todoList = todos.map((todo, index) => {
    return <li key={index}>{todo}</li>;
  });

  const handleTextChange = (e) => {
    setText(e.target.value);
  };
  const handleAddItem = () => {
    const newTodos = [...todos];
    newTodos.push(text);
    setTodos(newTodos);
    setText("");
  };
  return (
    <>
      <div>My Todo List:</div>
      <ul>{todoList}</ul>
      <input placeholder="Todo Item" value={text} onChange={handleTextChange} />
      <button onClick={handleAddItem}>Add Item</button>
    </>
  );
}
