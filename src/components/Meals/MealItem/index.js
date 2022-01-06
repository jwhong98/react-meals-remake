import React from "react";
import { Item, Info, Description, Price } from "./MealItemElements";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  return (
    <Item>
      <Info>
        <h3>{props.name}</h3>
        <Description>{props.description}</Description>
        <Price>{price}</Price>
      </Info>
      <MealItemForm />
    </Item>
  );
};

export default MealItem;
