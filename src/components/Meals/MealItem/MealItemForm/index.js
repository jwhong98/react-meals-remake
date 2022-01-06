import React from "react";
import { Form, Info, Label, Input, Button } from "./MealItemFormElements";

const MealItemForm = () => {
  return (
    <Form>
      <Info>
        <Label>Amount</Label>
        <Input type="number"></Input>
      </Info>
      <Button>+ Add</Button>
    </Form>
  );
};

export default MealItemForm;
