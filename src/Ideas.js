// This is the Ideas component, where Idea cards will be displayed

import React from "react";
import "./Ideas.css";

const Ideas = (props) => {

  const { name, blade } = props;

  return (
    <article>
      <h2>Hello, {name}!</h2>
      <p>You have a nice {blade} lightsabre there!</p>
    </article>
  )
}

export default Ideas;