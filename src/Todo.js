import React, { Component } from "react";

export default class Todo extends Component {
  state = {
    todo: [],
    input: ""
  };

  componentDidMount() {
    //Making to the server to grab todo
    this.setState({ todo: ["default todo item"] });
  }

  handleInputChange = (e) => {
    this.setState({ input: e.target.value });
  };

  handleAddItem = () => {
    const newTodo = [...this.state.todo];
    newTodo.push(this.state.input);
    this.setState({ todo: newTodo });
  };

  render() {
    const todo = this.state.todo.map((item) => {
      return <li>{item}</li>;
    });

    return (
      <>
        <div>My Todo List with Class Component</div>
        <ul>{todo}</ul>
        <input onChange={this.handleInputChange} />
        <button onClick={this.handleAddItem}>Add Item</button>
      </>
    );
  }
}
