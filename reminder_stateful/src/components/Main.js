import React, { Component } from "react";
import Form from "./Form";
import List from "./List";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: {
        text: "",
      },
      list: [
        {
          text: "",
          id: null,
        },
      ],
    };
  }
  onInputChange = (event) => {
    this.setState({
      term: {
        text: event.target.value,
      },
    });
  };

  onFormSubmit = (event) => {
    event.preventDefault();

    if (this.state.term.text !== "") {
      this.setState({
        term: {
          text: "",
        },
        list: [
          {
            text: this.state.term.text,
            id: Math.floor(Math.random() * 10000),
          },
          ...this.state.list,
        ],
      });
    }
  };

  //callback for List.js, edit hook arguments
  onUpdateTodo = (index, newValue) => {
    //Do not include the old value of updated todo - probably bug
    const oldValues = this.state.list.filter((todo) => todo.id !== index);

    //after clicking edit, showing the new value with the same id
    if (newValue !== "") {
      this.setState({
        list: [
          ...oldValues,
          {
            text: newValue,
            id: index,
          },
        ],
      });
    }

    // if (index && newValue) {
    //   console.log(index + newValue);
    // }
  };

  //DELETE FUNCTION FOR TODOs

  onDeleteClick = (index) => {
    const deletedTodo = this.state.list.filter((todo) => {
      return index !== todo.id;
    });
    this.setState({
      list: deletedTodo,
    });
  };

  render() {
    const { term, list } = this.state;
    return (
      <div className="todo-container">
        <h1>To do List</h1>
        <Form
          onInputChange={this.onInputChange}
          onFormSubmit={this.onFormSubmit}
          value={term}
        />
        <List
          list={list}
          onDeleteClick={this.onDeleteClick}
          onUpdateTodo={this.onUpdateTodo}
        />
      </div>
    );
  }
}

export default Main;
