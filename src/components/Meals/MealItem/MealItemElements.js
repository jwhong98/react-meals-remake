import styled from "styled-components";

export const Item = styled.li`
  padding-bottom: 1rem;
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  margin: 1rem;
`;

export const Info = styled.div`
  h3 {
    margin: 0 0 0.25rem 0;
  }
`;

export const Description = styled.div`
  font-style: italic;
`;

export const Price = styled.div`
  color: #ad5502;
  font-size: 1.25rem;
  font-weight: bold;
  margin-top: 0.25rem;
`;
