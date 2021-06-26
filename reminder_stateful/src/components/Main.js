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
            id: Math.floor(Math.random() * 1000),
          },
          ...this.state.list,
        ],
      });
    }
  };

  //DELETE FUNCTION FOR TODOs

  onDeleteClick = (index) => {
    const deletedTodo = [...this.state.list].filter((todo) => {
      console.log(todo.id);
      return index !== todo.id;
    });
    this.setState({
      list: deletedTodo,
    });
  };

  render() {
    const { term, list } = this.state;
    return (
      <div>
        <h3>Add your todos</h3>
        <Form
          onInputChange={this.onInputChange}
          onFormSubmit={this.onFormSubmit}
          value={term}
        />
        <List list={list} onDeleteClick={this.onDeleteClick} />
      </div>
    );
  }
}

export default Main;
