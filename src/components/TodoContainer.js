import React from 'react';
import TodosList from "./TodosList";
import Header from "./Header";
import InputTodo from "./InputTodo";
import { v4 as uuidv4 } from "uuid";

class TodoContainer extends React.Component {

  state = {
    todos: [
      {
        id: 1,
        title: "todo 1",
        completed: true
      },
      {
        id: 2,
        title: "todo 2",
        completed: false
      },
      {
        id: 3,
        title: "todo 3",
        completed: false
      }
    ]
   };

    render() {
      return (
        <div className="container">
          <Header />
          <InputTodo addTodoProps={this.addTodoItem}/>
          <TodosList todos={this.state.todos} handleChangeProps={this.handleChange} deleteTodoProps={this.delTodo}/>
        </div>
      )
    }

    addTodoItem = title => {
      console.log(title);
      const newTodo = {
        id: uuidv4(),
        title: title,
        completed: false
      };
      this.setState({
        todos: [...this.state.todos, newTodo]
      });
    };

    handleChange = (id) => {
      console.log("clicked", id);
      this.setState({
        todos: this.state.todos.map(todo => {
          if (todo.id === id) {
            todo.completed = !todo.completed;
          }
          return todo;
        })
      });
    };

    delTodo = id => {
      console.log("deleted", id);
      this.setState({
        todos: [
          ...this.state.todos.filter(todo => {
            return todo.id !== id;
          })
        ]
      });
    };
}

export default TodoContainer