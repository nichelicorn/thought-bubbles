// This component displays a collection of cards, each displaying a discrete idea
// Ideas are created by the user in the form above the card display

import React, { Component } from "react";
import Form from "./Form";
import Ideas from "./Ideas";
import "./App.css";

class App extends Component {
  constructor() {
    // Extend all Component methods / properties to the App
    super();
    // this, here, is binding the state / relevant data application, to the App component
    this.state = {
      ideas: []
    }
  }

  addIdea = ( newIdea ) => {
    this.setState({ ideas: [...this.state.ideas, newIdea] });
  }

  deleteIdea = ( id ) => {
    // delete idea from state based on id
    const filteredIdeas = this.state.ideas.filter (idea => idea.id !== id);

    this.setState({ ideas: filteredIdeas });
  }

  setStorage = () => { // localStorage is being reset to an empty array each time the page is refreshed
    // console.log("something is happening! 🧐 ");
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
        <Form addIdea={this.addIdea} />
        {!this.state.ideas.length && <h2>Hey! Add some thoughts to make bubbles 🧼</h2>}
        <Ideas ideas={this.state.ideas} deleteIdea={this.deleteIdea} setStorage={this.setStorage} />
      </main>
    )
  }
}

export default App;