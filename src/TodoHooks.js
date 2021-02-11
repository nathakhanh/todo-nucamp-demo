import React, { useState, useEffect } from "react";

export default function TodoHooks() {
  const [todo, setTodo] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    //Making to the server to grab todo
    setTodo(["default todo item"]);
  }, []);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleAddItem = () => {
    const newTodo = [...todo];
    newTodo.push(input);
    setTodo(newTodo);
  };

  const todoList = todo.map((item) => {
    return <li>{item}</li>;
  });

  return (
    <>
      <div>My Todo List with Functional Component</div>
      <ul>{todoList}</ul>
      <input onChange={handleInputChange} />
      <button onClick={handleAddItem}>Add Item</button>
    </>
  );
}
