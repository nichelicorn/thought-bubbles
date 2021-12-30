// The Card component, which sets the layout for each idea card

import React from "react";
import "./Card.css";

const Card = ( { title, description, id, deleteIdea } ) => {
  return (
    <div className="card bubble">
      <h3 className="title">{title}</h3>
      <p className="description">{description}</p>
      <button onClick={() => deleteIdea(id)} className="bubble btn">pop the bubble</button>
    </div>
  )
}

export default Card;