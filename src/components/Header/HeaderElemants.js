import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 5rem;
  background-color: #8a2b06;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  position: fixed;
  z-index: 10;
`;
export const Badge = styled.span`
  padding: 0.25rem 1rem;
  background-color: #b94517;
  border-radius: 25px;
  margin-left: 1rem;
  font-weight: bold;
`;

export const CartButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;
  font: inherit;
  color: #fff;
  background-color: #4d1601;
  border: none;
  border-radius: 25px;
  padding: 0.75rem 3rem;
  font-weight: bold;

  :hover,
  :active {
    background-color: #2c0d00;
  }

  :hover ${Badge}, :active ${Badge} {
    background-color: #92320c;
  }
`;

export const Icon = styled.span`
  width: 1.35rem;
  height: 1.35rem;
  margin-right: 0.5rem;
`;

export const Label = styled.span``;

export const ImgContainer = styled.div`
  width: 100%;
  height: 25rem;
  overflow: hidden;
  z-index: 0;
`;

export const Img = styled.img`
  width: 110%;
  height: 100%;
  object-fit: cover;
  transform: rotateZ(-5deg) translateY(-4rem) translateX(-1rem);
`;
