// This is the Ideas component, where Idea cards will be displayed

import React from "react";
import Card from "./Card.js"
import "./Ideas.css";

const Ideas = ( { ideas, deleteIdea, setStorage } ) => {

  const ideaCards = ideas.map(idea => {
    return (
      <Card 
        title={idea.title}
        description={idea.description}
        id={idea.id}
        key={idea.id}
        deleteIdea={deleteIdea}
      />
    )
  })

  return (
    <div className="ideas-wrap">
      {console.log("ideas <>>>", ideas)}
      {ideaCards}
      {setStorage()}
    </div>
  )
}

export default Ideas;