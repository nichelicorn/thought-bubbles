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
    // Calvin and Hobbes quotes from: https://www.gocomics.com/comics/lists/1643203/calvin-and-hobbes-bus-stop-musings
    this.state = {
      ideas: [
        {
          id: 1,
          title: "Hobbes says: (adding two spikes to Calvin's hair)",
          description: "Trust me. You look like ... like ... Astro Boy.",
        },
        {
          id: 2,
          title: "Calvin says (standing in the rain):",
          description: "Why in the world am I waiting in the pouring fain for the school bus to take me somewhere I don't even want to go? ... I go to school, but I never learn what I want to know.",
        },
        {
          id: 3,
          title: "Hobbes says, to Calvin:",
          description: "How on Earth did you get all the say to the bus stop with both feet through one pant leg?",
        }
      ]
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
    const storedIdeas = this.state.ideas;
    console.log("ideas to store <>>>", storedIdeas);
  }

  render() {
    return (
      <main className="App">
        <h1>Thought Bubbles</h1>
        <Form addIdea={this.addIdea} setStorage={this.setStorage} />
        {/* Test code for looking at the way props interact between parent / child components */}
        {/* <Ideas name="Ahsoka" blade="green"/>
        <Ideas name="Anakin" blade="blue"/>
        <Ideas name="Mace" blade="purple" /> */}
        {/* Conditional rendering based on `this.state` */}
        {!this.state.ideas.length && <h2>Hey! Add some thoughts to make bubbles 🧼</h2>}
        <Ideas ideas={this.state.ideas} deleteIdea={this.deleteIdea}  />
      </main>
    )
  }
}

export default App;