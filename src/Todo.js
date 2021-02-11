import React, { Component } from "react";

export default class Todo extends Component {
  state = {
    text: "",
    todos: []
  };

  componentDidMount() {
    //simulate fetching the data from database
    setTimeout(() => {
      this.setState({ todos: ["do laundry", "get a haircut"] });
    }, 2000);
  }

  handleTextChange = (e) => {
    this.setState({ text: e.target.value });
  };
  handleAddItem = () => {
    const newTodos = [...this.state.todos];
    newTodos.push(this.state.text);
    this.setState({ todos: newTodos, text: "" });
  };
  render() {
    const todos = this.state.todos.map((todo, index) => {
      return <li key={index}>{todo}</li>;
    });
    return (
      <>
        <div>My Todo List:</div>
        <ul>{todos}</ul>
        <input
          placeholder="Todo Item"
          value={this.state.text}
          onChange={this.handleTextChange}
        />
        <button onClick={this.handleAddItem}>Add Item</button>
      </>
    );
  }
}
