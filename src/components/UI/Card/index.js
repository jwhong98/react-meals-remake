import React from "react";
import { Container } from "./CardElements";

const Card = (props) => {
  return <Container>{props.children}</Container>;
};

export default Card;
