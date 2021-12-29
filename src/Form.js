import React, { Component } from "react";
import "./Form.css";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      title: "";
      description: ""
    }
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <form>
        <input 
          type="text"
          placeholder="title"
          name="title"
          value={this.state.title}
          onChange={event => this.handleChange(event)}
        />

        <input 
          type="text"
          placeholder="description"
          name="description"
          value={this.state.description}
          onChange={event => this.handleChange(event)}
        />

        <button>blow bubbles</button>
      </form>
    )
  }
}

export default Form;