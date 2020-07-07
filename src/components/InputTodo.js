import React, { Component } from "react"

class InputTodo extends Component {
  state = {
    title: ""
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form-container">
        <input type="text" placeholder="Add Todo..." className="input-text" name="title" value={this.state.title} onChange={this.onChange} />
        <input type="submit" value="Submit" className="input-submit"/>
      </form>
    )
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodoProps(this.state.title);
    this.setState({
      title: ""
    });
  };
}
export default InputTodo