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
        <List list={list} />
      </div>
    );
  }
}

export default Main;
