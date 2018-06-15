import React from "react";
import TodoList from "./TodoList";
export default class Todos extends React.Component {
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
