import "./App.css";
import React, { Component } from "react";
import { TodoList } from "./Components/todolist";

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoList />
      </div>
    );
  }
}

export default App;