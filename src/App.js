// This component displays a collection of cards, each displaying a discrete idea
// Ideas are created by the user in the form above the card display

import React, { Component } from "react";

class App extends Component {
  constructor() {
    // Extend all Component methods / properties to the App
    super();
    // this, here, is binding the state, relevant data application, to this component
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

  render() {
    return (
      <main className="App">
        <h1>Thought Bubbles</h1>
        <p>This should *not* throw an error 🙉</p>
      </main>
    )
  }
}

export default App;