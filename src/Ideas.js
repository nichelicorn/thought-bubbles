// This is the Ideas component, where Idea cards will be displayed

import React from "react";
import Card from "./Card.js";
import "./Ideas.css";

const Ideas = (props) => {

  const { name, blade } = props;

  return (
    <div className="ideas-wrap">
      <Card />
      <Card />
      <Card />
    </div>
  )
}

export default Ideas;