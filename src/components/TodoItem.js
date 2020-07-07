import React from "react";


class TodoItem extends React.Component {
  render() {
    const { completed, id, title } = this.props.todo
    return (
    <li className="todo-item">
      <input
        type="checkbox"
        checked={completed}
        onChange={() => this.props.handleChangeProps(id)}
      />
      <button onClick={() => this.props.deleteTodoProps(id)}>
        Delete
      </button>

      {title}
    </li>
    )
  }
}

export default TodoItem;