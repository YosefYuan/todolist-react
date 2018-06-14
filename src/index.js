import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class TodoList extends React.Component {
  removeItem(item, i) {
    this.props.removeTodo(item, i);
  }
  render() {
    return (
      <div>
        <ul>
          {this.props.entries.map((todo, i) => {
            return (
              <li key={i}>
                {todo}
                <button
                  onClick={() => {
                    this.removeItem(todo, i);
                  }}
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

class Todos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    };
  }

  addTask = event => {
    event.preventDefault();
    const newTaskInput = this.refs.newTask.value;
    if (!newTaskInput) return;
    const allTasks = this.state.tasks;
    allTasks.push(newTaskInput);
    this.setState({
      tasks: allTasks
    });
    this.refs.newTask.value = "";
  };

  removeTask = (item, i) => {
    const tasks = this.state.tasks.slice();
    tasks.splice(i, 1);
    this.setState({
      tasks
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.addTask}>
          <input type="text" placeholder="Enter New Task" ref="newTask" />
          <button type="submit">add</button>
        </form>
        <TodoList entries={this.state.tasks} removeTodo={this.removeTask} />
      </div>
    );
  }
}

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
