import React from "react";
import MealItem from "../MealItem";
import { Container, List } from "./AvailableMealsElements";
import Card from "../../UI/Card";

const AvailableMeals = () => {
  const DUMMY_MEALS = [
    {
      id: "m1",
      name: "Sushi",
      description: "Finest fish and veggies",
      price: 22.99,
    },
    {
      id: "m2",
      name: "Schnitzel",
      description: "A german specialty!",
      price: 16.5,
    },
    {
      id: "m3",
      name: "Barbecue Burger",
      description: "American, raw, meaty",
      price: 12.99,
    },
    {
      id: "m4",
      name: "Green Bowl",
      description: "Healthy...and green...",
      price: 18.99,
    },
  ];

  const createMealItem = (meals) => {
    return (
      <MealItem
        key={meals.id}
        name={meals.name}
        description={meals.description}
        price={meals.price}
      />
    );
  };

  return (
    <Container>
      <Card>
        <List>{DUMMY_MEALS.map(createMealItem)}</List>
      </Card>
    </Container>
  );
};

export default AvailableMeals;
