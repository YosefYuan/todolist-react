import React from "react";
export default class TodoList extends React.Component {
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
