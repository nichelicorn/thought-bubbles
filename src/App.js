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
    const filteredIdeas = this.state.ideas.filter (idea => idea.id != id);

    this.setState({ ideas: filteredIdeas });
  }

  setStorage = () => {
    console.log("something is happening! 🧐 ");
    const storedIdeas = this.state.ideas; // this is logging state before the new idea is added to the array; move this logic into the Form component to keep the timing more consistent?
    console.log("ideas to store <>>>", storedIdeas);
    localStorage.setItem("ideas", storedIdeas);
    console.log("this.state.ideas <>>>", this.state.ideas);
  }

  render() {
    return (
      <main className="App">
        <h1>Thought Bubbles</h1>
        <Form addIdea={this.addIdea} />
        {/* Test code for looking at the way props interact between parent / child components */}
        {/* <Ideas name="Ahsoka" blade="green"/>
        <Ideas name="Anakin" blade="blue"/>
        <Ideas name="Mace" blade="purple" /> */}
        {/* Conditional rendering based on `this.state` */}
        {!this.state.ideas.length && <h2>Hey! Add some thoughts to make bubbles 🧼</h2>}
        <Ideas ideas={this.state.ideas} deleteIdea={this.deleteIdea} setStorage={this.setStorage} />
      </main>
    )
  }
}

export default App;