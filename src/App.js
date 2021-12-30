// The App component, where everything is put together

import React, { Component } from "react";
import Form from "./Form";
import Ideas from "./Ideas";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      ideas: []
    }
  }

  addIdea = ( newIdea ) => {
    this.setState({ ideas: [...this.state.ideas, newIdea] });
  }

  deleteIdea = ( id ) => {
    // deletes an idea from state based on id
    const filteredIdeas = this.state.ideas.filter (idea => idea.id !== id);

    this.setState({ ideas: filteredIdeas });
  }

  setStorage = () => {
    const storedIdeas = JSON.stringify(this.state.ideas);
    console.log("storedIdeas <>>>", storedIdeas);
    localStorage.setItem("ideas", storedIdeas);
  }

  // getStored = () => {
  //   const retrievedIdeas = JSON.parse(localStorage.getItem("ideas"));
  //   console.log("retrievedIdeas <>>>", retrievedIdeas); // logs previously stored array
  //   this.setState({ ideas: retrievedIdeas });
  // }

  getStored = () => { JSON.parse(localStorage.getItem("ideas")) }

  render() {
    return (
      <main className="App">
        <h1>thought bubbles 💭</h1>
        <p>Add some thoughts, then pop the bubbles!</p>
        <Form addIdea={this.addIdea} />
        {!this.state.ideas.length && <h2>Hey! Add some thoughts to make bubbles 🧼</h2>}
        <Ideas ideas={this.state.ideas} deleteIdea={this.deleteIdea} setStorage={this.setStorage} />
      </main>
    )
  }
}

export default App;