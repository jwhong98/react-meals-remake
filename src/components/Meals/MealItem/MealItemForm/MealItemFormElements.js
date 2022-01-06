import styled from "styled-components";

export const Form = styled.form`
  text-align: right;
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;

export const Label = styled.label`
  font-weight: bold;
  margin-right: 1rem;
`;

export const Input = styled.input`
  width: 3rem;
  border-radius: 5px;
  border: 1px solid #ccc;
  padding-left: 0.5rem;
  font: inherit;
`;

export const Button = styled.button`
  background-color: #8a2b06;
  border: 1px solid #8a2b06;
  color: #fff;
  font-weight: bold;
  padding: 0.5rem 2rem;
  border-radius: 20px;
  font-size: 1rem;
  cursor: pointer;

  :hover,
  :active {
    background-color: #641e03;
    border-color: #641e03;
  }
`;
