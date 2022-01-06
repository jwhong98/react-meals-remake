import React from "react";
import {
  Container,
  CartButton,
  Icon,
  Label,
  Badge,
  ImgContainer,
  Img,
} from "./HeaderElemants";
import img from "../../assets/meals.jpg";
import CartIcon from "../Cart/CartIcon";

const Header = () => {
  return (
    <React.Fragment>
      <Container>
        <h1>ReactMeals</h1>
        <CartButton>
          <Icon>
            <CartIcon />
          </Icon>
          <Label>Your Cart</Label>
          <Badge>3</Badge>
        </CartButton>
      </Container>
      <ImgContainer>
        <Img src={img} alt="table of food"></Img>
      </ImgContainer>
    </React.Fragment>
  );
};

export default Header;
