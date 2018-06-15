import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Todos from "./Todos";

class App extends React.Component {
  render() {
    return (
      <div className="app container">
        <div className="title">
          <h1>React Todo App</h1>
          <Todos />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
