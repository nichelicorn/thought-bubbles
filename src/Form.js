import React, { Component } from "react";
import "./Form.css";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      description: ""
    }
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  submitIdea = event => {
    event.preventDefault(); // prevents the page from refreshing when the form is submitted
    const newIdea = {
      id: Date.now(),
      ...this.state // spreads in the title and description
    }
    this.props.addIdea(newIdea); // uses the addIdea method from the App, passed to Form as a prop
    this.props.setStorage();
    this.clearInputs();
  }

  clearInputs = () => {
    this.setState({ title: "", description: "" });
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

        <button onClick={event => {
            this.submitIdea(event);

            }
            } >
          blow bubbles
        </button>
      </form>
    )
  }
}

export default Form;