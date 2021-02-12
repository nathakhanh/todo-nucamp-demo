import React, { Component } from "react";

export default class Todo extends Component {
  state = {
    text: "",
    todos: []
  };

  componentDidMount() {
    //simulate fetching data from the DB
    setTimeout(() => {
      this.setState({ todos: ["Do laundry", "Get a haircut"] });
    }, 2000);
  }

  handleInputChange = (e) => {
    this.setState({ text: e.target.value });
  };
  handleAddItem = () => {
    const newTodos = [...this.state.todos];
    newTodos.push(this.state.text);
    this.setState({ todos: newTodos, text: "" });
  };
  render() {
    const todos = this.state.todos.map((todo) => {
      return <li>{todo}</li>;
    });
    return (
      <>
        <div>My Todo List:</div>
        <ul>{todos}</ul>
        <input
          placeholder="Todo item"
          value={this.state.text}
          onChange={this.handleInputChange}
        />
        <button onClick={this.handleAddItem}>Add Item</button>
      </>
    );
  }
}
