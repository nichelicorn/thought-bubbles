// This is the Ideas component, where Idea cards will be displayed

import React from "react";
import Card from "./Card.js"
import "./Ideas.css";

const Ideas = ( {ideas} ) => {

  // 👇 this was kind of interesting ... the ideas are an object, even though they are an Array; might read into this later
  // console.log("Ideas component ideas", ideas); // logs Array []
  // console.log("typeof ideas", typeof ideas); // logs object

  if (! ideas.length) {
    return (
      <h3>Hey! Add some thinky thinks!</h3>
    )
  }

  // Test code for looking at the way props interact between parent / child components
  // const { name, blade } = props;

  const ideaCards = ideas.map(idea => {
    return (
      <Card 
        title={idea.title}
        description={idea.description}
        id={idea.id}
        key={idea.id}
      />
    )
  })

  return (
    <div className="ideas-wrap">
      {ideaCards}
    </div>
  )
}

export default Ideas;